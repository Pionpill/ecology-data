import type { PlantData } from "../../type";

const SOY_BEAN_PLANT: PlantData = {
  seedId: "ham:soy_bean",
  blockPrefix: "ham:soy_bean",
  type: "grain",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 25],
      can: [5, 40],
    },
    rainfall: {
      suit: [50, 80],
      can: [15, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 80,
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
      tick: 23,
      height: [8, 32],
    },
    {
      state: "grow",
      tick: 23,
      height: [18, 32],
    },
    {
      state: "flower",
      tick: 24,
      height: [24, 32],
    },
    {
      state: "mature",
      height: [24, 32],
      loots: {
        itemId: "ham:soy_bean",
        chance: 100,
        count: 6,
      },
    },
  ],
};

export default SOY_BEAN_PLANT;
