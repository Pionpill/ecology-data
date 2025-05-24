import type { PlantData } from "../../type";

const LEEK_PLANT: PlantData = {
  beta: false,
  seedId: "ham:leek",
  blockPrefix: "ham:leek",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 25],
      can: [5, 30],
    },
    rainfall: {
      suit: [40, 80],
      can: [20, 100],
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
    rainInfo: {
      multiply: 1.5,
    },
    period: "all",
    outDoor: false,
  },
  stageInfo: [
    {
      state: "seed",
      tick: 17,
      height: [7, 32],
    },
    {
      state: "grow",
      tick: 17,
      height: [14, 32],
      loots: [
        {
          itemId: "ham:leek",
          chance: 100,
          count: 2,
        },
      ],
      harvest: {
        convertBlock: "ham:leek_stage_0",
        count: 10,
      },
    },
    {
      state: "mature",
      height: [24, 32],
      loots: [
        {
          itemId: "ham:leek",
          chance: 100,
          count: 4,
        },
        {
          itemId: "ham:leek_seeds",
          chance: 100,
          count: 1.5,
        },
      ],
      harvest: {
        convertBlock: "ham:leek_stage_0",
        count: 10,
      },
    },
  ],
};

export default LEEK_PLANT;
