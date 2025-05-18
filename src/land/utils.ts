import type { LangType } from "../_common/type";
import { LAND_LANG_EN, LAND_TAG_LANG_EN } from "./lang/en_US";
import { LAND_LANG_ZH, LAND_TAG_LANG_ZH } from "./lang/zh_CN";
import type { LandId, LandTag } from "./type";

/** 获取群系名称 */
export const getLandName = (landId: LandId, lang: LangType) => {
  return lang === "zh" ? LAND_LANG_ZH[landId] : LAND_LANG_EN[landId];
};

/** 获取群系名称 */
export const getLandTagName = (landTag: LandTag, lang: LangType) => {
  return lang === "zh" ? LAND_TAG_LANG_ZH[landTag] : LAND_TAG_LANG_EN[landTag];
};
