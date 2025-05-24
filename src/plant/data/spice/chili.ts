import type { PlantData } from "../../type";

const CHILI_PLANT: PlantData = {
  beta: true,
  seedId: "ham:chili",
  blockPrefix: "ham:chili",
  type: "spice",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 30],
      can: [5, 40],
    },
    rainfall: {
      suit: [40, 80],
      can: [15, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 60,
      sensitivity: 40,
      landTag: ["dirt"],
    },
    period: "sun",
    outDoor: true,
  },
  stageInfo: [
    {
      state: "seed",
      tick: 10,
      height: [12, 32],
    },
    {
      state: "grow",
      tick: 10,
      height: [20, 32],
    },
    {
      state: "flower",
      tick: 13,
      height: [20, 32],
    },
    {
      state: "mature",
      height: [24, 32],
      harvest: {
        convertBlock: "ham:chili_stage_2",
        count: 3,
      },
      loots: [
        {
          itemId: "ham:chili",
          chance: 100,
          count: 4,
          tag: ["fruit", "seed"],
        },
        {
          itemId: "ham:straw",
          chance: 100,
          count: 1,
          tag: "byproduct",
        },
      ],
    },
  ],
};

export default CHILI_PLANT;
