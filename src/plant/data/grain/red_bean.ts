import type { PlantData } from "../../type";

const RED_BEAN_PLANT: PlantData = {
  beta: false,
  seedId: "ham:red_bean",
  blockPrefix: "ham:red_bean",
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
      tick: 17,
      height: [8, 32],
    },
    {
      state: "grow",
      tick: 17,
      height: [18, 32],
    },
    {
      state: "flower",
      tick: 17,
      height: [24, 32],
    },
    {
      state: "mature",
      height: [24, 32],
      loots: [
        {
          itemId: "ham:red_bean",
          chance: 100,
          count: 6,
        },
      ],
    },
  ],
};

export default RED_BEAN_PLANT;
