import type { PlantData } from "../../type";

const ONION_PLANT: PlantData = {
  beta: true,
  seedId: "ham:onion_seeds",
  blockPrefix: "ham:onion",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [10, 25],
      can: [-5, 35],
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
    rainInfo: {
      multiply: 1.5,
    },
    period: "sun",
  },
  stageInfo: [
    {
      state: "seed",
      tick: 55,
      height: [103, 32],
    },
    {
      state: "grow",
      tick: 55,
      height: [14, 32],
      loots: {
        itemId: "ham:onion",
        chance: 100,
        count: 2,
      },
    },
    {
      state: "flower",
      tick: 56,
      height: [20, 32],
      loots: {
        itemId: "ham:onion",
        chance: 100,
        count: 5,
      },
    },
    {
      state: "mature",
      height: [22, 32],
      loots: {
        itemId: "ham:onion",
        chance: 100,
        count: 10,
      },
    },
  ],
};

export default ONION_PLANT;
