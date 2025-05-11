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
] as const;

export default LAND_DATA;
