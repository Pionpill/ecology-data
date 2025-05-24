import type { PlantData } from "../../type";

const SORGHUM_PLANT: PlantData = {
  seedId: "ham:sorghum",
  blockPrefix: "ham:sorghum",
  type: "grain",
  defaultGrowInfo: {
    temperature: {
      suit: [20, 30],
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
      tick: 23,
      height: [24, 32],
    },
    {
      state: "grow",
      tick: 23,
      height: [32, 32],
    },
    {
      state: "flower",
      tick: 23,
      height: [64, 32],
    },
    {
      state: "mature",
      height: [80, 32],
      loots: [
        {
          itemId: "ham:sorghum",
          chance: 100,
          count: 3.5,
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

export default SORGHUM_PLANT;
