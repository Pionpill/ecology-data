import type { PlantLootTag, PlantStageState, PlantType } from "../type";

export const PLANT_LOOT_TAG_LANG_EN: Record<PlantLootTag, string> = {
  fruit: "Fruit",
  byproduct: "Byproduct",
  seed: "Seed",
};

export const PLANT_STAGE_STATE_LANG_EN: Record<PlantStageState, string> = {
  seed: "Seed",
  grow: "Grow",
  flower: "Flower",
  mature: "Mature",
  dead: "Dead",
};

export const PLANT_TYPE_LANG_EN: Record<PlantType, string> = {
  grain: "Grain",
  fungi: "Fungi",
  spice: "Spice",
  fruit: "Fruit",
  vegetable: "Vegetable",
  grass: "Grass",
};
