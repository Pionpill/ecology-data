import type { PlantData } from "../../type";

const CABBAGE_PLANT: PlantData = {
  beta: false,
  seedId: "ham:cabbage_seeds",
  blockPrefix: "ham:cabbage",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 25],
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
      min: 70,
      sensitivity: 40,
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
      tick: 17,
      height: [5, 32],
    },
    {
      state: "grow",
      tick: 17,
      height: [9, 32],
    },
    {
      state: "grow",
      tick: 17,
      height: [7, 32],
    },
    {
      state: "mature",
      height: [10, 32],
      loots: [
        {
          itemId: "ham:cabbage",
          chance: 100,
          count: 3,
        },
        {
          itemId: "ham:cabbage_seeds",
          chance: 100,
          count: 1.5,
        },
      ],
    },
  ],
};

export default CABBAGE_PLANT;
