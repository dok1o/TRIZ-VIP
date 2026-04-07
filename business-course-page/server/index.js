import express from "express";
import cors from "cors";

const app = express();

const allowedOrigin = process.env.ALLOWED_ORIGIN ?? "*";
const corsOrigins =
  allowedOrigin === "*"
    ? true
    : allowedOrigin
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
app.use(
  cors({
    origin: corsOrigins,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json({ limit: "64kb" }));

const PRESET_IDS = ["water_cut_oil_fields", "cubesat_thermal", "mining_tailings_recovery"];

/** Short context per preset + lang (minimal tokens) */
const CASE_SNIPPET = {
  water_cut_oil_fields: {
    ru: "KazMunayGas / нефтегаз: высокая обводнённость зрелых месторождений. Конфликт: нагнетание воды держит давление пласта, но прорыв к добывающим скважинам режет нефть. Цель: снизить затраты на обводнённость и поднять эффективность добычи. Solution: сепарация, избирательное закачивание, полимерные гели и т.п. Strategy: цель→гипотеза→метрика. Finance: снижение затрат, энергия, NPV.",
    en: "KazMunayGas / oil&gas: high water cut in mature fields. Conflict: water injection sustains reservoir pressure vs breakthrough to producers reducing oil. Goal: cut water-handling cost and lift oil efficiency. Solution: phase separation, selective injection, polymer gels, etc. Strategy: goal→hypothesis→metric. Finance: cost reduction, energy, NPV.",
  },
  cubesat_thermal: {
    ru: "CubeSat: перегрев из-за мощности передатчика. Конфликт: радиатор нужен большой для охлаждения / маленький по габариту. Цель: теплоконтроль без роста массы. Solution: heat pipes, PCM, раскладывающиеся радиаторы; снятие компромисса масса–отвод тепла.",
    en: "CubeSat overheating from higher transmitter power. Conflict: radiator must be large for cooling vs small for form factor. Goal: thermal control without mass growth. Solution: heat pipes, phase-change materials, deployable radiators; mass vs heat rejection tradeoff.",
  },
  mining_tailings_recovery: {
    ru: "Хвосты с хромом: мелкие частицы не извлекаются. Конфликт: частицы должны быть мелкими (природа шлама) и крупными (улавливание сепаратором). Цель: выше извлечение металла из отходов. Solution: флотация, магнитная сепарация, нанофильтрация и др. Finance+экология: прибыль и снижение рисков.",
    en: "Chromium tailings: fine particles not recovered. Conflict: particles naturally fine vs need coarser for standard separators. Goal: higher metal recovery from waste. Solution: flotation, magnetic separation, nanofiltration, etc. Finance + environment: profit and risk reduction.",
  },
};

// cache: model + lang + caseKey + input
const cache = new Map();
const CACHE_TTL_MS = Number.parseInt(process.env.CACHE_TTL_MS ?? "1800000", 10);
const CACHE_MAX_ENTRIES = Number.parseInt(process.env.CACHE_MAX_ENTRIES ?? "200", 10);

function getCacheKey({ model, lang, caseKey, input }) {
  return `${model}__${lang}__${caseKey}__${input}`;
}

function cacheGet(key) {
  const hit = cache.get(key);
  if (!hit) return null;
  if (Date.now() - hit.ts > CACHE_TTL_MS) {
    cache.delete(key);
    return null;
  }
  return hit.value ?? null;
}

function cacheSet(key, value) {
  cache.set(key, { ts: Date.now(), value });
  if (cache.size <= CACHE_MAX_ENTRIES) return;
  const entries = Array.from(cache.entries()).sort((a, b) => a[1].ts - b[1].ts);
  for (let i = 0; i < entries.length && cache.size > CACHE_MAX_ENTRIES; i++) {
    cache.delete(entries[i][0]);
  }
}

app.get("/", (_req, res) => {
  res.type("text/plain; charset=utf-8").send(
    [
      "Это только API-прокси к Ollama, не веб-страница.",
      "",
      "Сайт открой в Vite: http://localhost:5173/TRIZ-VIP/",
      'POST /api/case  JSON: { "input": "...", "lang": "ru"|"en", "caseName"?: "water_cut_oil_fields"|"cubesat_thermal"|"mining_tailings_recovery" }',
      "",
      "Проверка: GET /health",
    ].join("\n"),
  );
});

app.get("/health", (_req, res) => {
  res.json({ ok: true, postCase: "/api/case" });
});

const OLLAMA_URL = process.env.OLLAMA_URL ?? "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL ?? "llama3";
const PORT = Number.parseInt(process.env.PORT ?? "3001", 10);

function safeJsonFromText(text) {
  if (typeof text !== "string") return null;
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  const candidate = text.slice(start, end + 1);
  try {
    return JSON.parse(candidate);
  } catch {
    return null;
  }
}

function emptyCase() {
  return {
    problem: "",
    contradiction: "",
    solution: "",
    strategy: "",
    finance: "",
  };
}

function normalizeCasePayload(obj) {
  if (!obj || typeof obj !== "object") return emptyCase();
  const pick = (key) => (typeof obj[key] === "string" ? obj[key] : "");
  return {
    problem: pick("problem"),
    contradiction: pick("contradiction"),
    solution: pick("solution"),
    strategy: pick("strategy"),
    finance: pick("finance"),
  };
}

function resolveCaseName(raw) {
  if (typeof raw !== "string") return "";
  const id = raw.trim();
  return PRESET_IDS.includes(id) ? id : "";
}

app.post("/api/case", async (req, res) => {
  try {
    const lang = req.body?.lang === "en" ? "en" : "ru";
    const caseName = resolveCaseName(req.body?.caseName);
    let input = typeof req.body?.input === "string" ? req.body.input.trim() : "";

    if (!input && !caseName) {
      return res.status(400).json({
        error: "Missing input (or select a preset caseName)",
        ...emptyCase(),
      });
    }

    if (!input && caseName) {
      input = lang === "ru" ? "Дополнительных уточнений нет." : "No additional details.";
    }

    const caseKey = caseName || "custom";
    const cacheKey = getCacheKey({ model: OLLAMA_MODEL, lang, caseKey, input });
    const cached = cacheGet(cacheKey);
    if (cached) {
      // eslint-disable-next-line no-console
      console.log("CACHE HIT");
      return res.json(cached);
    }
    // eslint-disable-next-line no-console
    console.log("CACHE MISS - calling Ollama");

    const keys = "problem,contradiction,solution,strategy,finance";
    const system =
      lang === "ru"
        ? `TRIZ VIP. Только валидный JSON, ключи: ${keys}. Все строки строго на русском. 1–3 коротких предложения на поле. Никакого текста вне JSON. Допускай недостающие факты.`
        : `TRIZ VIP. Valid JSON only, keys: ${keys}. All string values strictly in English. 1–3 short sentences per field. No text outside JSON. Assume reasonable defaults if info is missing.`;

    const snippet = caseName && CASE_SNIPPET[caseName] ? CASE_SNIPPET[caseName][lang] : "";
    const userParts = [];
    if (snippet) userParts.push(`Context:\n${snippet}`);
    userParts.push(`${lang === "ru" ? "Заметки" : "Notes"}:\n${input}`);
    const user = userParts.join("\n\n");

    // ngrok free tier: без этого заголовка запросы с сервера часто получают 403 (interstitial / bot block)
    const ollamaHeaders = { "content-type": "application/json" };
    if (String(OLLAMA_URL).includes("ngrok")) {
      ollamaHeaders["ngrok-skip-browser-warning"] = "true";
    }

    const ollamaResp = await fetch(`${OLLAMA_URL}/api/chat`, {
      method: "POST",
      headers: ollamaHeaders,
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        stream: false,
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
        options: {
          temperature: 0.15,
          num_predict: 240,
          top_k: 24,
          top_p: 0.85,
        },
      }),
    });

    if (!ollamaResp.ok) {
      const errText = await ollamaResp.text().catch(() => "");
      return res.status(502).json({
        error: `Ollama error: ${ollamaResp.status}`,
        details: errText.slice(0, 500),
        ...emptyCase(),
      });
    }

    const raw = await ollamaResp.json();
    const content = raw?.message?.content ?? "";
    const parsed = safeJsonFromText(content);
    const data = normalizeCasePayload(parsed);

    cacheSet(cacheKey, data);
    return res.json(data);
  } catch (e) {
    return res.status(500).json({
      error: "Server error",
      ...emptyCase(),
    });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`API: http://localhost:${PORT}  (POST /api/case) — сайт открывай через: npm run dev`);
});
