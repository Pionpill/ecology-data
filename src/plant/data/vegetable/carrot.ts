import type { PlantData } from "../../type";

const CARROT_PLANT: PlantData = {
  beta: false,
  seedId: "ham:carrot",
  blockPrefix: "ham:carrot",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [10, 25],
      can: [5, 35],
    },
    rainfall: {
      suit: [50, 80],
      can: [30, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 90,
      sensitivity: 50,
      landTag: ["dirt"],
    },
    period: "sun",
    outDoor: true,
  },
  stageInfo: [
    {
      state: "seed",
      tick: 17,
      height: [9, 32],
    },
    {
      state: "grow",
      tick: 17,
      height: [12, 32],
    },
    {
      state: "flower",
      tick: 17,
      height: [23, 32],
    },
    {
      state: "mature",
      height: [23, 32],
      loots: [
        {
          itemId: "ham:carrot",
          chance: 100,
          count: 3,
          tag: "fruit",
        },
      ],
    },
  ],
};

export default CARROT_PLANT;
