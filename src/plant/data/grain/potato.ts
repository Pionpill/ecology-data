import type { PlantData } from "../../type";

const POTATO_PLANT: PlantData = {
  beta: false,
  seedId: "ham:potato",
  blockPrefix: "ham:potato",
  type: "grain",
  defaultGrowInfo: {
    temperature: {
      suit: [5, 25],
      can: [0, 30],
    },
    rainfall: {
      suit: [60, 80],
      can: [30, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 80,
      sensitivity: 100,
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
      tick: 17,
      height: [8, 32],
    },
    {
      state: "grow",
      tick: 17,
      height: [21, 32],
    },
    {
      state: "flower",
      tick: 17,
      height: [26, 32],
    },
    {
      state: "mature",
      height: [30, 32],
      loots: {
        itemId: "ham:potato",
        chance: 100,
        count: 4,
      },
    },
  ],
};

export default POTATO_PLANT;
