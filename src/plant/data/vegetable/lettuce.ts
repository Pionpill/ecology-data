import type { PlantData } from "../../type";

const LETTUCE_PLANT: PlantData = {
  beta: false,
  seedId: "ham:lettuce_seeds",
  blockPrefix: "ham:lettuce",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [10, 25],
      can: [0, 30],
    },
    rainfall: {
      suit: [60, 100],
      can: [30, 100],
    },
    brightness: {
      suit: [6, 12],
      can: [4, 20],
    },
    fertility: {
      min: 80,
      sensitivity: 50,
      landTag: ["dirt"],
    },
    rainInfo: {
      multiply: 1.5,
    },
    period: "all",
    outDoor: false,
  },
  stageInfo: [
    {
      state: "seed",
      tick: 11,
      height: [12, 32],
    },
    {
      state: "grow",
      tick: 11,
      height: [13, 32],
      loots: [
        {
          itemId: "ham:lettuce",
          chance: 100,
          count: 2,
        },
      ],
      harvest: {
        count: 2,
        convertBlock: "ham:lettuce_stage_0",
      },
    },
    {
      state: "mature",
      height: [14, 32],
      loots: [
        {
          itemId: "ham:lettuce",
          chance: 100,
          count: 3,
        },
        {
          itemId: "ham:lettuce_seeds",
          chance: 100,
          count: 1.5,
        },
      ],
      harvest: {
        count: 2,
        convertBlock: "ham:lettuce_stage_0",
      },
    },
  ],
};

export default LETTUCE_PLANT;
