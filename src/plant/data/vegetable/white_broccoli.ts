import type { PlantData } from "../../type";

const WHITE_BROCCOLI_PLANT: PlantData = {
  beta: false,
  seedId: "ham:white_broccoli_seeds",
  blockPrefix: "white_broccoli",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 25],
      can: [5, 30],
    },
    rainfall: {
      suit: [60, 80],
      can: [30, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 70,
      sensitivity: 40,
      landTag: ["dirt"],
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
      height: [10, 32],
    },
    {
      state: "grow",
      tick: 17,
      height: [11, 32],
    },
    {
      state: "mature",
      tick: 17,
      height: [14, 32],
      loots: [
        {
          itemId: "ham:white_broccoli",
          chance: 100,
          count: 3,
        },
        {
          itemId: "ham:broccoli",
          chance: 10,
          count: 1,
        },
        {
          itemId: "ham:white_broccoli_seeds",
          chance: 100,
          count: 1.5,
        },
      ],
    },
  ],
};

export default WHITE_BROCCOLI_PLANT;
