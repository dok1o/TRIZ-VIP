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

  const resp = await fetch("/api/case", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });

  const json = await resp.json().catch(() => null);
  if (!resp.ok) {
    const msg =
      json && typeof json === "object" && "error" in json
        ? String((json as { error?: unknown }).error)
        : `${resp.status} ${resp.statusText}`;
    throw new Error(msg);
  }

  return parseCase(json);
}
