import type { OreFeatureData } from "../type";

const ORE_FEATURE_DATA: OreFeatureData[] = [
  {
    tags: { or: ["ocean"] },
    iterations: 7,
    ore: {
      count: 7,
      replaceBlock: [
        "minecraft:andesite",
        "minecraft:andesite_smooth",
        "minecraft:diorite",
        "minecraft:diorite_smooth",
        "minecraft:granite",
        "minecraft:granite_smooth",
        "minecraft:stone",
      ],
      placeBlock: "ham:red_bean_stage_3",
    },
  },
  {
    tags: { or: ["overworld"] },
    iterations: 5,
    ore: {
      count: 4,
      replaceBlock: [
        "minecraft:andesite",
        "minecraft:andesite_smooth",
        "minecraft:diorite",
        "minecraft:diorite_smooth",
        "minecraft:granite",
        "minecraft:granite_smooth",
        "minecraft:stone",
      ],
      placeBlock: "ham:red_bean_stage_3",
    },
  },
];

export default ORE_FEATURE_DATA;
