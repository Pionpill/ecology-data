import type { PlantData } from "../../type";

const GARLIC_PLANT: PlantData = {
  beta: true,
  seedId: "ham:garlic",
  blockPrefix: "ham:garlic",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [10, 25],
      can: [0, 30],
    },
    rainfall: {
      suit: [50, 70],
      can: [20, 80],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 60,
      sensitivity: 20,
      landTag: ["dirt"],
    },
    rainInfo: {
      multiply: 1.5,
    },
    period: "sun",
    outDoor: true,
  },
  stageInfo: [
    {
      state: "seed",
      tick: 25,
      height: [11, 32],
    },
    {
      state: "grow",
      tick: 25,
      height: [27, 32],
    },
    {
      state: "mature",
      height: [28, 32],
      loots: {
        itemId: "ham:garlic",
        chance: 100,
        count: 9,
      },
    },
  ],
};

export default GARLIC_PLANT;
