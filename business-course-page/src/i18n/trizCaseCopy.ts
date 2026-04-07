import type { CasePreset } from "../ollamaCase";

const CUSTOM: Record<string, string> = {
  param1: "triz.stage1.param1",
  param2: "triz.stage1.param2",
  param3: "triz.stage1.param3",
  contradictionText: "triz.stage2.technicalContradictionText",
  conflictUp: "triz.stage2.conflictUpText",
  conflictDown: "triz.stage2.conflictDownText",
  divisionText: "triz.stage3.divisionPrincipleText",
  bullet1: "triz.stage3.bullet1",
  bullet2: "triz.stage3.bullet2",
  bullet3: "triz.stage3.bullet3",
  emptyResult: "triz.stage3.expectedResultText",
};

/** Static TRIZ copy: custom = generic i18n; preset = industry-specific i18n under triz.cases.{preset}.* */
export function trizCaseField(t: (key: string) => string, preset: CasePreset, field: keyof typeof CUSTOM): string {
  if (preset === "custom") return t(CUSTOM[field]);
  return t(`triz.cases.${preset}.${field}`);
}

export function patentSectionBody(
  t: (key: string) => string,
  preset: CasePreset,
  section: 1 | 2 | 3 | 4 | 5,
): string {
  if (preset === "custom") return t(`patent.section${section}.text`);
  return t(`patent.cases.${preset}.section${section}.text`);
}

export function patentEmptySubtitle(t: (key: string) => string, preset: CasePreset): string {
  if (preset === "custom") return t("patent.empty.subtitle");
  return t(`patent.cases.${preset}.emptySubtitle`);
}

export type FinanceCaseDefaults = {
  revenue: string;
  roi: string;
  payback: string;
  hint: string;
};

export function financeCaseDefaults(t: (key: string) => string, preset: CasePreset): FinanceCaseDefaults {
  if (preset === "custom") {
    return {
      revenue: "$150,000",
      roi: "200%",
      payback: t("finance.forecast.paybackValue"),
      hint: "",
    };
  }
  return {
    revenue: t(`finance.cases.${preset}.defaultRevenue`),
    roi: t(`finance.cases.${preset}.defaultRoi`),
    payback: t(`finance.cases.${preset}.defaultPayback`),
    hint: t(`finance.cases.${preset}.hint`),
  };
}
