import type { PlantData } from "../../type";

const SUGARCANE_PLANT: PlantData = {
  seedId: "ham:sugarcane",
  blockPrefix: "ham:sugarcane",
  type: "fruit",
  defaultGrowInfo: {
    temperature: {
      suit: [25, 35],
      can: [15, 45],
    },
    rainfall: {
      suit: [50, 80],
      can: [20, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 90,
      sensitivity: 100,
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
      tick: 50,
      height: [18, 32],
    },
    {
      state: "grow",
      tick: 50,
      height: [32, 32],
    },
    {
      state: "grow",
      tick: 50,
      height: [54, 32],
    },
    {
      state: "mature",
      height: [108, 32],
      loots: {
        itemId: "ham:sugarcane",
        chance: 100,
        count: 6,
      },
    },
  ],
};

export default SUGARCANE_PLANT;
