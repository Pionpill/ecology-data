import type { PlantData } from "../../type";

const SWEET_POTATO_PLANT: PlantData = {
  seedId: "ham:sweet_potato",
  blockPrefix: "ham:sweet_potato",
  type: "grain",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 35],
      can: [10, 40],
    },
    rainfall: {
      suit: [30, 60],
      can: [10, 80],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 90,
      sensitivity: 80,
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
      tick: 20,
      height: [9, 32],
    },
    {
      state: "grow",
      tick: 20,
      height: [19, 32],
    },
    {
      state: "grow",
      tick: 20,
      height: [27, 32],
    },
    {
      state: "mature",
      height: [30, 32],
      loots: {
        itemId: "ham:sweet_potato",
        chance: 100,
        count: 4,
      },
    },
  ],
};

export default SWEET_POTATO_PLANT;
