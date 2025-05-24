import type { PlantData } from "../../type";

const TOMATO_PLANT: PlantData = {
  seedId: "ham:tomato",
  blockPrefix: "ham:tomato",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [20, 30],
      can: [10, 35],
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
      min: 100,
      sensitivity: 80,
      landTag: ["dirt"],
    },
    rainInfo: {
      multiply: 1.5,
    },
    period: "sun",
  },
  stageInfo: [
    {
      state: "seed",
      tick: 13,
      height: [14, 32],
    },
    {
      state: "grow",
      tick: 13,
      height: [20, 32],
    },
    {
      state: "grow",
      tick: 14,
      height: [24, 32],
    },
    {
      state: "mature",
      height: [34, 32],
      loots: {
        itemId: "ham:tomato",
        chance: 100,
        count: 4,
      },
    },
  ],
};

export default TOMATO_PLANT;
