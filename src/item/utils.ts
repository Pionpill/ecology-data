import type { LangType } from "../_common/type";
import type { MaterialType } from "../plant/type";
import {
  ITEM_ID_LANG_EN,
  MATERIAL_TYPE_LANG_EN,
  PLANT_FAMILY_LANG_EN,
  PLANT_PRODUCT_LANG_EN,
  SATURATION_MODIFIER_LANG_EN,
} from "./lang/en_US";
import {
  ITEM_ID_LANG_ZH,
  MATERIAL_TYPE_LANG_ZH,
  PLANT_FAMILY_LANG_ZH,
  PLANT_PRODUCT_LANG_ZH,
  SATURATION_MODIFIER_LANG_ZH,
} from "./lang/zh_CN";
import type { ItemId, PlantFamily, PlantProduce, SaturationModifier } from "./type";

const saturationModifierMap = {
  poor: 0.2,
  low: 0.6,
  normal: 1.2,
  good: 1.6,
  max: 2.0,
  supernatural: 2.4,
};

/** 获取饱和度调整的具体数值 */
export const getSaturationModifierValue = (saturationModifier: SaturationModifier) =>
  saturationModifierMap[saturationModifier];

/** 获取饱食度修正值名称 */
export const getSaturationModifierName = (name: SaturationModifier, lang: LangType) => {
  return lang === "zh" ? SATURATION_MODIFIER_LANG_ZH[name] : SATURATION_MODIFIER_LANG_EN[name];
};

/** 获取作物类别名称 */
export const getPlantFamilyName = (name: PlantFamily, lang: LangType) => {
  return lang === "zh" ? PLANT_FAMILY_LANG_ZH[name] : PLANT_FAMILY_LANG_EN[name];
};

/** 获取作物产物名称 */
export const getPlantProduceName = (name: PlantProduce, lang: LangType) => {
  return lang === "zh" ? PLANT_PRODUCT_LANG_ZH[name] : PLANT_PRODUCT_LANG_EN[name];
};

/** 获取原材料类型名称 */
export const getMaterialTypeName = (name: MaterialType, lang: LangType) => {
  return lang === "zh" ? MATERIAL_TYPE_LANG_ZH[name] : MATERIAL_TYPE_LANG_EN[name];
};

/** 获取物品名称 */
export const getItemIdName = (name: ItemId, lang: LangType) => {
  return lang === "zh" ? ITEM_ID_LANG_ZH[name] : ITEM_ID_LANG_EN[name];
};
