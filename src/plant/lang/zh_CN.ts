import type { PlantLootTag, PlantStageState, PlantType } from "../type";

export const PLANT_LOOT_TAG_LANG_ZH: Record<PlantLootTag, string> = {
  fruit: "果实",
  byproduct: "副产物",
  seed: "种子",
};

export const PLANT_STAGE_STATE_LANG_ZH: Record<PlantStageState, string> = {
  seed: "苗",
  grow: "生长",
  flower: "开花",
  mature: "成熟",
  dead: "死亡",
};

export const PLANT_TYPE_LANG_ZH: Record<PlantType, string> = {
  grain: "主粮",
  fungi: "菌类",
  spice: "香料",
  fruit: "水果",
  vegetable: "蔬菜",
  grass: "草",
};
