import type { PlantData } from "../../type";

const BOK_CHOY_PLANT: PlantData = {
  beta: false,
  seedId: "ham:bok_choy_seeds",
  blockPrefix: "ham:bok_choy",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [10, 25],
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
      min: 60,
      sensitivity: 60,
      landTag: ["dirt"],
    },
    period: "sun",
    outDoor: false,
  },
  stageInfo: [
    {
      state: "seed",
      tick: 10,
      height: [14, 32],
    },
    {
      state: "grow",
      tick: 10,
      height: [20, 32],
      loots: [
        {
          itemId: "ham:bok_choy",
          chance: 100,
          count: 2,
          tag: "fruit",
        },
      ],
    },
    {
      state: "mature",
      height: [24, 32],
      loots: [
        {
          itemId: "ham:bok_choy",
          chance: 100,
          count: 3,
        },
        {
          itemId: "ham:bok_choy_seeds",
          chance: 100,
          count: 1.5,
        },
      ],
    },
  ],
};

export default BOK_CHOY_PLANT;
