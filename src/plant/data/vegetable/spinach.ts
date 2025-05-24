import type { PlantData } from "../../type";

const SPINACH_PLANT: PlantData = {
  seedId: "ham:spinach",
  blockPrefix: "ham:spinach",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [10, 25],
      can: [0, 30],
    },
    rainfall: {
      suit: [60, 80],
      can: [30, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 70,
      sensitivity: 60,
      landTag: ["dirt"],
    },
    rainInfo: {
      multiply: 1.5,
    },
    period: "all",
  },
  stageInfo: [
    {
      state: "seed",
      tick: 12,
      height: [6, 32],
    },
    {
      state: "grow",
      tick: 12,
      height: [9, 32],
      loots: {
        itemId: "ham:spinach",
        chance: 100,
        count: 2,
      },
    },
    {
      state: "mature",
      height: [13, 32],
      loots: [
        {
          itemId: "ham:spinach",
          chance: 100,
          count: 3,
        },
        {
          itemId: "ham:spinach_seeds",
          chance: 100,
          count: 1.5,
        },
      ],
    },
  ],
};

export default SPINACH_PLANT;
