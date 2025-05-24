import type { PlantData } from "../../type";

const RICE_PLANT: PlantData = {
  seedId: "ham:rice_seeds",
  blockPrefix: "ham:rice",
  type: "grain",
  defaultGrowInfo: {
    temperature: {
      suit: [20, 35],
      can: [10, 40],
    },
    rainfall: {
      suit: [40, 100],
      can: [20, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 120,
      sensitivity: 130,
      landTag: ["dirt"],
    },
    rainInfo: {
      multiply: 2,
    },
    period: "sun",
  },
  stageInfo: [
    {
      state: "seed",
      tick: 25,
      height: [12, 32],
    },
    {
      state: "grow",
      tick: 25,
      height: [30, 32],
    },
    {
      state: "flower",
      tick: 25,
      height: [38, 32],
    },
    {
      state: "mature",
      height: [42, 32],
      loots: [
        {
          itemId: "ham:rice_plant",
          chance: 100,
          count: 3.5,
        },
        {
          itemId: "ham:rice_seeds",
          chance: 100,
          count: 1.5,
        },
      ],
    },
  ],
};

export default RICE_PLANT;
