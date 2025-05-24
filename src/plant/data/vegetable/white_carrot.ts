import type { PlantData } from "../../type";

const WHITE_CARROT_PLANT: PlantData = {
  seedId: "ham:white_carrot",
  blockPrefix: "ham:white_carrot",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [5, 20],
      can: [0, 30],
    },
    rainfall: {
      suit: [50, 80],
      can: [30, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 80,
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
      tick: 12,
      height: [5, 32],
    },
    {
      state: "grow",
      tick: 12,
      height: [11, 32],
    },
    {
      state: "flower",
      tick: 12,
      height: [24, 32],
    },
    {
      state: "mature",
      height: [20, 32],
      loots: [
        {
          itemId: "ham:white_carrot",
          chance: 100,
          count: 3,
        },
      ],
    },
  ],
};

export default WHITE_CARROT_PLANT;
