import type { PlantData } from "../../type";

const WHEAT_PLANT: PlantData = {
  seedId: "ham:wheat_seeds",
  blockPrefix: "ham:wheat",
  type: "grain",
  defaultGrowInfo: {
    temperature: {
      suit: [10, 25],
      can: [0, 30],
    },
    rainfall: {
      suit: [40, 80],
      can: [20, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 90,
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
      state: "grow",
      tick: 17,
      height: [26, 32],
    },
    {
      state: "mature",
      height: [30, 32],
      loots: [
        {
          itemId: "ham:wheat_plant",
          chance: 100,
          count: 2,
        },
        {
          itemId: "ham:wheat_seeds",
          chance: 100,
          count: 1.5,
        },
      ],
    },
  ],
};

export default WHEAT_PLANT;
