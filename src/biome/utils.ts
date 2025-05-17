import type { LangType } from "../_common/type";
import { BIOME_CATEGORY_LANG_EN, BIOME_DIMENSION_LANG_EN, BIOME_LANG_EN, BIOME_TAG_LANG_EN } from "./lang/en_US";
import { BIOME_CATEGORY_LANG_ZH, BIOME_DIMENSION_LANG_ZH, BIOME_LANG_ZH, BIOME_TAG_LANG_ZH } from "./lang/zh_CN";
import type { BiomeCategory, BiomeId, BiomeTag, Dimension } from "./type";

/** 获取维度名称 */
export const getDimensionName = (dimension: Dimension, lang: LangType) => {
  return lang === "zh" ? BIOME_DIMENSION_LANG_ZH[dimension] : BIOME_DIMENSION_LANG_EN[dimension];
};

/** 获取群系名称 */
export const getBiomeName = (biomeId: BiomeId, lang: LangType) => {
  return lang === "zh" ? BIOME_LANG_ZH[biomeId] : BIOME_LANG_EN[biomeId];
};

/** 获取群系分类名称 */
export const getBiomeCategoryName = (category: BiomeCategory, lang: LangType) => {
  return lang === "zh" ? BIOME_CATEGORY_LANG_ZH[category] : BIOME_CATEGORY_LANG_EN[category];
};

/** 获取群系标签名称 */
export const getBiomeTagName = (tag: BiomeTag, lang: LangType) => {
  return lang === "zh" ? BIOME_TAG_LANG_ZH[tag] : BIOME_TAG_LANG_EN[tag];
};
