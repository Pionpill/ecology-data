import type { Identifier, LangType } from "../_common/type";
import { PLANT_LOOT_TAG_LANG_EN, PLANT_STAGE_STATE_LANG_EN, PLANT_TYPE_LANG_EN } from "./lang/en_US";
import { PLANT_LOOT_TAG_LANG_ZH, PLANT_STAGE_STATE_LANG_ZH, PLANT_TYPE_LANG_ZH } from "./lang/zh_CN";
import type { PlantLootTag, PlantStageState, PlantType } from "./type";

/** 通过方块 id 获取作物前缀 */
export const getPlantPrefixFromBlockId = (blockId: Identifier) => {
  const blockIdArray = blockId.split("_");
  const stageIndex = blockIdArray.findIndex((item) => item === "stage");
  if (stageIndex === -1) {
    throw new Error(`Plant blockId is not valid: ${blockId}`);
  }
  return blockIdArray.slice(0, stageIndex).join("");
};

/** 获取掉落物标签名称 */
export const getPlantLootTagName = (tag: PlantLootTag, lang: LangType) => {
  return lang === "zh" ? PLANT_LOOT_TAG_LANG_ZH[tag] : PLANT_LOOT_TAG_LANG_EN[tag];
};

/** 获取生长阶段状态名称 */
export const getPlantStageStateName = (state: PlantStageState, lang: LangType) => {
  return lang === "zh" ? PLANT_STAGE_STATE_LANG_ZH[state] : PLANT_STAGE_STATE_LANG_EN[state];
};

/** 获取作物类型名称 */
export const getPlantTypeName = (type: PlantType, lang: LangType) => {
  return lang === "zh" ? PLANT_TYPE_LANG_ZH[type] : PLANT_TYPE_LANG_EN[type];
};
