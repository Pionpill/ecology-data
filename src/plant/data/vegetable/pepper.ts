import type { PlantData } from "../../type";

const PEPPER_PLANT: PlantData = {
  beta: false,
  seedId: "ham:pepper",
  blockPrefix: "ham:pepper",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [20, 30],
      can: [10, 40],
    },
    rainfall: {
      suit: [50, 80],
      can: [15, 90],
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
      tick: 13,
      height: [6, 32],
    },
    {
      state: "grow",
      tick: 13,
      height: [14, 32],
    },
    {
      state: "flower",
      tick: 14,
      height: [24, 32],
    },
    {
      state: "mature",
      height: [30, 32],
      loots: {
        itemId: "ham:pepper",
        chance: 100,
        count: 3,
      },
      harvest: {
        convertBlock: "ham:pepper_stage_0",
        count: 3,
      },
    },
  ],
};

export default PEPPER_PLANT;
