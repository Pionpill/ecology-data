import type { LangType } from "../_common/type";
import { EFFECT_LANG_EN } from "./lang/en_US";
import { EFFECT_LANG_ZH } from "./lang/zh_CN";
import type { EffectId } from "./type";

export const getEffectName = (effectId: EffectId, lang: LangType) => {
  return lang === "zh" ? EFFECT_LANG_ZH[effectId] : EFFECT_LANG_EN[effectId];
};
