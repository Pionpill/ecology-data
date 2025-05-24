import type { PlantData } from "../../type";

const GREEN_BEAN_PLANT: PlantData = {
  beta: false,
  seedId: "ham:green_bean",
  blockPrefix: "ham:green_bean",
  type: "grain",
  defaultGrowInfo: {
    temperature: {
      suit: [20, 30],
      can: [10, 40],
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
      sensitivity: 40,
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
      tick: 10,
      height: [8, 32],
    },
    {
      state: "grow",
      tick: 10,
      height: [18, 32],
    },
    {
      state: "flower",
      tick: 10,
      height: [24, 32],
    },
    {
      state: "mature",
      height: [24, 32],
      loots: [
        {
          itemId: "ham:green_bean",
          chance: 100,
          count: 4,
        },
      ],
    },
  ],
};

export default GREEN_BEAN_PLANT;
