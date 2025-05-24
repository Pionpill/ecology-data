import type { PlantData } from "../../type";

const CORN_PLANT: PlantData = {
  beta: true,
  seedId: "ham:corn_seeds",
  blockPrefix: "ham:corn",
  type: "grain",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 30],
      can: [5, 40],
    },
    rainfall: {
      suit: [40, 100],
      can: [15, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 100,
      sensitivity: 110,
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
      tick: 20,
      height: [26, 32],
    },
    {
      state: "grow",
      tick: 20,
      height: [42, 32],
    },
    {
      state: "grow",
      tick: 20,
      height: [64, 32],
    },
    {
      state: "mature",
      height: [70, 32],
      loots: [
        {
          itemId: "ham:corn",
          chance: 100,
          count: 6,
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

export default CORN_PLANT;
