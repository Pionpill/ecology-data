import type { PlantData } from "../../type";

const PEANUT_PLANT: PlantData = {
  beta: false,
  seedId: "ham:peanut",
  blockPrefix: "ham:peanut",
  type: "grain",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 35],
      can: [10, 40],
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
      min: 90,
      sensitivity: 70,
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
      tick: 22,
      height: [9, 32],
    },
    {
      state: "grow",
      tick: 22,
      height: [22, 32],
    },
    {
      state: "flower",
      tick: 22,
      height: [27, 32],
    },
    {
      state: "mature",
      height: [30, 32],
      loots: {
        itemId: "ham:peanut",
        chance: 100,
        count: 6,
      },
    },
  ],
};

export default PEANUT_PLANT;
