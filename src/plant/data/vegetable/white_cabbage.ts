import type { PlantData } from "../../type";

const WHITE_CABBAGE_PLANT: PlantData = {
  seedId: "ham:white_cabbage_seeds",
  blockPrefix: "ham:white_cabbage",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [5, 20],
      can: [-5, 30],
    },
    rainfall: {
      suit: [40, 70],
      can: [20, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 80,
      sensitivity: 50,
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
      height: [6, 32],
    },
    {
      state: "grow",
      tick: 12,
      height: [8, 32],
    },
    {
      state: "grow",
      tick: 13,
      height: [19, 32],
    },
    {
      state: "mature",
      height: [26, 32],
      loots: [
        {
          itemId: "ham:white_cabbage",
          chance: 100,
          count: 2,
        },
        {
          itemId: "ham:white_cabbage_seeds",
          chance: 100,
          count: 1.5,
        },
      ],
    },
  ],
};

export default WHITE_CABBAGE_PLANT;
