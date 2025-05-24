import type { PlantData } from "../../type";

const BEET_PLANT: PlantData = {
  beta: false,
  seedId: "ham:beet",
  blockPrefix: "ham:beet",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 25],
      can: [0, 30],
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
      min: 80,
      sensitivity: 60,
      landTag: ["dirt"],
    },
    rainInfo: {
      multiply: 1.5,
    },
    period: "sun",
    outDoor: true,
  },
  stageInfo: [
    {
      state: "seed",
      tick: 14,
      height: [12, 32],
    },
    {
      state: "grow",
      tick: 14,
      height: [14, 32],
    },
    {
      state: "mature",
      height: [21, 32],
      loots: [
        {
          itemId: "ham:beet_root",
          chance: 100,
          count: 4,
          tag: ["fruit", "seed"],
        },
        {
          itemId: "ham:beet_leaf",
          chance: 100,
          count: 1,
          tag: "fruit",
        },
      ],
    },
  ],
};

export default BEET_PLANT;
