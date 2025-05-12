import type { LandData } from "./type";

const LAND_DATA: Array<LandData> = [
  {
    blockId: "minecraft:farmland",
    fertility: 120,
    tags: ["dirt"],
    state: {
      fertility: 130,
      attribute: "moisture",
      value: 7,
    },
  },
  {
    blockId: "minecraft:podzol",
    fertility: 100,
    tags: ["dirt", "fungi"],
  },
  {
    blockId: "minecraft:grass",
    fertility: 90,
    tags: ["dirt"],
  },
  {
    blockId: "minecraft:grass_path",
    fertility: 70,
    tags: ["dirt"],
  },
  {
    blockId: "minecraft:dirt",
    fertility: 80,
    tags: ["dirt"],
  },
  {
    blockId: "minecraft:sand",
    fertility: 40,
    tags: ["sand"],
  },
  {
    blockId: "minecraft:red_sand",
    fertility: 30,
    tags: ["sand"],
  },
  {
    blockId: "minecraft:mycelium",
    fertility: 130,
    tags: ["fungi"],
  },
  {
    blockId: "minecraft:moss_block",
    fertility: 90,
    tags: ["dirt"],
  },
  {
    blockId: "minecraft:oak_wood",
    fertility: 90,
    tickCount: 200,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:stripped_oak_wood",
    fertility: 100,
    tickCount: 180,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:spruce_wood",
    fertility: 70,
    tickCount: 160,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:stripped_spruce_wood",
    fertility: 80,
    tickCount: 140,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:birch_wood",
    fertility: 80,
    tickCount: 180,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:stripped_birch_wood",
    fertility: 90,
    tickCount: 160,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:jungle_wood",
    fertility: 30,
    tickCount: 120,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:stripped_jungle_wood",
    fertility: 50,
    tickCount: 80,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:acacia_wood",
    fertility: 60,
    tickCount: 140,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:stripped_acacia_wood",
    fertility: 70,
    tickCount: 120,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:dark_oak_wood",
    fertility: 100,
    tickCount: 250,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:stripped_dark_oak_wood",
    fertility: 110,
    tickCount: 220,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:mangrove_wood",
    fertility: 20,
    tickCount: 100,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:stripped_mangrove_wood",
    fertility: 40,
    tickCount: 60,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:cherry_wood",
    fertility: 70,
    tickCount: 160,
    tags: ["wood"],
  },
  {
    blockId: "minecraft:stripped_cherry_wood",
    fertility: 80,
    tickCount: 140,
    tags: ["wood"],
  },
] as const;

export default LAND_DATA;
