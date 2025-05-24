import type { PlantData } from "../../type";

const STRAWBERRY_PLANT: PlantData = {
  seedId: "ham:strawberry",
  blockPrefix: "ham:strawberry",
  type: "fruit",
  defaultGrowInfo: {
    temperature: {
      suit: [10, 25],
      can: [0, 30],
    },
    rainfall: {
      suit: [60, 70],
      can: [30, 90],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 100,
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
      tick: 23,
      height: [2, 32],
    },
    {
      state: "grow",
      tick: 23,
      height: [6, 32],
    },
    {
      state: "flower",
      tick: 23,
      height: [7, 32],
    },
    {
      state: "mature",
      height: [7, 32],
      loots: {
        itemId: "ham:strawberry",
        chance: 100,
        count: 3,
      },
      harvest: {
        convertBlock: "ham:strawberry_stage_0",
        count: 3,
      },
    },
  ],
};

export default STRAWBERRY_PLANT;
