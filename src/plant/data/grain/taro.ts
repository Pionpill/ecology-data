import type { PlantData } from "../../type";

const TARO_PLANT: PlantData = {
  seedId: "ham:taro",
  blockPrefix: "ham:taro",
  type: "grain",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 30],
      can: [10, 40],
    },
    rainfall: {
      suit: [60, 80],
      can: [40, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 100,
      sensitivity: 90,
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
      tick: 37,
      height: [10, 32],
    },
    {
      state: "grow",
      tick: 37,
      height: [20, 32],
    },
    {
      state: "grow",
      tick: 37,
      height: [27, 32],
    },
    {
      state: "mature",
      height: [30, 32],
      loots: {
        itemId: "ham:taro",
        chance: 100,
        count: 7,
      },
    },
  ],
};

export default TARO_PLANT;
