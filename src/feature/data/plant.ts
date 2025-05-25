import type { ScatterFeatureData } from "../type";

const PLANT_FEATURE_DATA: ScatterFeatureData[] = [
  {
    tags: { or: ["forest", "taiga"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:beet_stage_2",
    },
  },
  {
    tags: { or: ["forest"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:bok_choy_stage_2",
    },
  },
  {
    tags: { or: ["forest"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 5,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:button_mushroom_stage_3",
    },
  },
  {
    tags: { or: ["plains"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 5,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:cabbage_stage_3",
    },
  },
  {
    tags: { or: ["plains", "forest"] },
    iterations: 1,
    scatter: {
      iterations: 1,
      chance: 3,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:carrot_stage_3",
    },
  },
  {
    tags: { or: ["taiga", "plains"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 2,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:celery_stage_2",
    },
  },
  {
    tags: { or: ["forest"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 5,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:chili_stage_3",
    },
  },
  {
    tags: { or: ["plains", "flower_forest"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:corn_stage_3",
    },
  },
  {
    tags: { or: ["forest"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 3,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:dictyophora_stage_2",
    },
  },
  {
    tags: { or: ["forest"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 3,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:eggplant_stage_3",
    },
  },
  {
    tags: { or: ["taiga"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 5,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:enoki_stage_2",
    },
  },
  {
    tags: { or: ["plains", "mountain", "hills"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 2,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:garlic_stage_2",
    },
  },
  {
    tags: { or: ["extreme_hills", "mountain", "hills"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:ginger_stage_3",
    },
  },
  {
    tags: { or: ["swamp", "mountain", "hills", "taiga"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 3,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:green_bean_stage_3",
    },
  },
  {
    tags: { or: ["plains", "mountain"] },
    iterations: 3,
    scatter: {
      iterations: 7,
      chance: 9,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:herb_stage_3",
    },
  },
  {
    tags: { or: ["plains"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:leek_stage_2",
    },
  },
  {
    tags: { or: ["swamp"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 2,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:lentinula_stage_3",
    },
  },
  {
    tags: { or: ["forest"] },
    iterations: 3,
    scatter: {
      iterations: 2,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:lettuce_stage_2",
    },
  },
  {
    tags: { or: ["birch"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 3,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:matsutake_stage_3",
    },
  },
  {
    tags: { or: ["taiga"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:onion_stage_3",
    },
  },
  {
    tags: { or: ["plains", "mountain", "hills"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 2,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:pea_stage_3",
    },
  },
  {
    tags: { or: ["extreme_hills", "mountain", "hills"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:peanut_stage_3",
    },
  },
  {
    tags: { or: ["forest"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:pepper_stage_3",
    },
  },
  {
    tags: { or: ["forest", "taiga"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:potato_stage_3",
    },
  },
  {
    tags: { or: ["plains"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:canola_stage_3",
    },
  },
  {
    tags: { or: ["mountain", "hills", "swamp"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 3,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:red_bean_stage_3",
    },
  },
  {
    tags: { or: ["forest"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 3,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:scallion_stage_3",
    },
  },
  {
    tags: { or: ["plains", "flower_forest"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 3,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:sorghum_stage_3",
    },
  },
  {
    tags: { or: ["hills", "mountain", "forest"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 3,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:soy_bean_stage_3",
    },
  },
  {
    tags: { or: ["taiga", "plains"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:spinach_stage_2",
    },
  },
  {
    tags: { or: ["forest"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 5,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:strawberry_stage_3",
    },
  },
  {
    tags: { or: ["jungle"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 5,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:sugarcane_stage_3",
    },
  },
  {
    tags: { or: ["savanna"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:sweet_potato_stage_3",
    },
  },
  {
    tags: { or: ["swamp"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:taro_stage_3",
    },
  },
  {
    tags: { or: ["hills", "mountain"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:tomato_stage_3",
    },
  },
  {
    tags: { or: ["overworld"] },
    iterations: 3,
    scatter: {
      iterations: 2,
      chance: 15,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:weed_tall",
    },
  },
  {
    tags: { or: ["overworld"] },
    iterations: 3,
    scatter: {
      iterations: 10,
      chance: 20,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:weed",
    },
  },
  {
    tags: { or: ["forest", "birch"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:wheat_stage_3",
    },
  },
  {
    tags: { or: ["plains"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 3,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:white_broccoli_stage_3",
    },
  },
  {
    tags: { or: ["plains"] },
    iterations: 1,
    scatter: {
      iterations: 1,
      chance: 3,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:white_cabbage_stage_3",
    },
  },
  {
    tags: { or: ["taiga", "forest"] },
    iterations: 1,
    scatter: {
      iterations: 1,
      chance: 3,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:white_carrot_stage_3",
    },
  },
  {
    tags: { or: ["forest"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 3,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:wood_ear_stage_2",
    },
  },
  {
    tags: { or: ["forest"] },
    iterations: 3,
    scatter: {
      iterations: 1,
      chance: 4,
      placeOn: ["minecraft:grass"],
      placeBlock: "ham:yam_stage_3",
    },
  },
];

export default PLANT_FEATURE_DATA;
