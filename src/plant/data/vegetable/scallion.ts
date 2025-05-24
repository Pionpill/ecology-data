import type { PlantData } from "../../type";

const SCALLION_PLANT: PlantData = {
  seedId: "ham:scallion_seeds",
  blockPrefix: "ham:scallion",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 25],
      can: [0, 35],
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
      sensitivity: 60,
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
      tick: 11,
      height: [14, 32],
    },
    {
      state: "grow",
      tick: 11,
      height: [26, 32],
    },
    {
      state: "grow",
      tick: 11,
      height: [34, 32],
      loots: {
        itemId: "ham:scallion",
        chance: 100,
        count: 2,
      },
    },
    {
      state: "mature",
      height: [50, 32],
      loots: [
        {
          itemId: "ham:scallion",
          chance: 100,
          count: 3,
        },
        {
          itemId: "ham:scallion_seeds",
          chance: 100,
          count: 1.5,
        },
      ],
    },
  ],
};

export default SCALLION_PLANT;
