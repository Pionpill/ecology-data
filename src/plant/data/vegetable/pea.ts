import type { PlantData } from "../../type";

const PEA_PLANT: PlantData = {
  beta: false,
  seedId: "ham:pea",
  blockPrefix: "ham:pea",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [10, 20],
      can: [5, 30],
    },
    rainfall: {
      suit: [40, 60],
      can: [20, 80],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 80,
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
      tick: 12,
      height: [11, 32],
    },
    {
      state: "grow",
      tick: 12,
      height: [16, 32],
    },
    {
      state: "flower",
      tick: 12,
      height: [21, 32],
    },
    {
      state: "mature",
      height: [24, 32],
      loots: {
        itemId: "ham:pea",
        chance: 100,
        count: 4,
      },
    },
  ],
};

export default PEA_PLANT;
