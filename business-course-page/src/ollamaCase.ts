export type CaseResult = {
  problem: string;
  contradiction: string;
  solution: string;
  strategy: string;
  finance: string;
};

export type TrizPresetCaseName =
  | "water_cut_oil_fields"
  | "cubesat_thermal"
  | "mining_tailings_recovery";

export type CasePreset = "custom" | TrizPresetCaseName;

export const TRIZ_CASE_FILL = "triz-case-fill" as const;
export const TRIZ_CASE_CLEAR = "triz-case-clear" as const;

export function dispatchTrizCaseFill(detail: CaseResult) {
  window.dispatchEvent(new CustomEvent(TRIZ_CASE_FILL, { detail }));
}

export function dispatchTrizCaseClear() {
  window.dispatchEvent(new CustomEvent(TRIZ_CASE_CLEAR));
}

const CASE_KEYS: (keyof CaseResult)[] = ["problem", "contradiction", "solution", "strategy", "finance"];

function parseCase(data: unknown): CaseResult {
  const out = {} as CaseResult;
  for (const k of CASE_KEYS) {
    const v =
      data && typeof data === "object" && typeof (data as Record<string, unknown>)[k] === "string"
        ? String((data as Record<string, string>)[k])
        : "";
    out[k] = v;
  }
  return out;
}

export async function fetchCase(params: {
  input: string;
  lang: "ru" | "en";
  caseName?: TrizPresetCaseName;
}): Promise<CaseResult> {
  const body: Record<string, string> = {
    input: params.input,
    lang: params.lang,
  };
  if (params.caseName) body.caseName = params.caseName;

  const apiBase = (import.meta as any)?.env?.VITE_API_BASE
    ? String((import.meta as any).env.VITE_API_BASE).trim().replace(/\/$/, "")
    : "";
  const url = apiBase ? `${apiBase}/api/case` : "/api/case";

  let resp: Response;
  try {
    resp = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (e) {
    const hint = apiBase
      ? `Проверь API ${apiBase}, CORS ALLOWED_ORIGIN и что сервис не «спит» на Free.`
      : "VITE_API_BASE не задан: запрос уходит на фронт. Пересобери web на Render с VITE_API_BASE.";
    throw new Error(e instanceof Error ? `${e.message}. ${hint}` : `Network error. ${hint}`);
  }

  const json = await resp.json().catch(() => null);
  if (!resp.ok) {
    const errObj = json && typeof json === "object" ? (json as { error?: unknown; hint?: unknown; details?: unknown }) : null;
    const parts: string[] = [];
    if (errObj?.error) parts.push(String(errObj.error));
    if (errObj?.hint) parts.push(String(errObj.hint));
    if (errObj?.details && typeof errObj.details === "string" && errObj.details.length < 400) {
      parts.push(String(errObj.details));
    }
    const msg = parts.length ? parts.join(" — ") : `${resp.status} ${resp.statusText}`;
    throw new Error(msg);
  }

  return parseCase(json);
}
