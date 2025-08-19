import type { PlantData } from "../../type";

const CANOLA_PLANT: PlantData = {
  seedId: "ham:canola",
  blockPrefix: "ham:canola",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [10, 25],
      can: [5, 30],
    },
    rainfall: {
      suit: [50, 80],
      can: [20, 90],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 80,
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
      tick: 15,
      height: [6, 32],
    },
    {
      state: "grow",
      tick: 15,
      height: [10, 32],
    },
    {
      state: "flower",
      tick: 15,
      height: [32, 32],
    },
    {
      state: "mature",
      height: [41, 32],
      loots: [
        {
          itemId: "ham:canola",
          chance: 100,
          count: 4,
        },
        {
          itemId: "ham:straw",
          chance: 100,
          count: 1,
        },
      ],
    },
  ],
};

export default CANOLA_PLANT;
