import type { PlantData } from "../../type";

const HERB_PLANT: PlantData = {
  beta: true,
  seedId: "ham:herb",
  blockPrefix: "ham:herb",
  type: "spice",
  defaultGrowInfo: {
    temperature: {
      suit: [-5, 30],
      can: [-15, 50],
    },
    rainfall: {
      suit: [30, 100],
      can: [10, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 50,
      sensitivity: 10,
      landTag: ["dirt", "stone"],
    },
    rainInfo: {
      multiply: 1.5,
    },
    period: "sun",
    outDoor: false,
  },
  stageInfo: [
    {
      state: "seed",
      tick: 6,
      height: [5, 32],
    },
    {
      state: "grow",
      tick: 6,
      height: [14, 32],
    },
    {
      state: "flower",
      tick: 6,
      height: [26, 32],
    },
    {
      state: "mature",
      height: [30, 32],
      loots: [
        {
          itemId: "ham:herb",
          chance: 100,
          count: 4,
        },
        {
          itemId: "ham:herb_seeds",
          chance: 100,
          count: 1.5,
        },
      ],
    },
  ],
};

export default HERB_PLANT;
