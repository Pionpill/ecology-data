import type { PlantData } from "../../type";

const CELERY_PLANT: PlantData = {
  beta: false,
  seedId: "ham:celery_seeds",
  blockPrefix: "ham:celery",
  type: "spice",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 20],
      can: [5, 25],
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
      tick: 35,
      height: [6, 32],
    },
    {
      state: "grow",
      tick: 35,
      height: [10, 32],
      loots: {
        itemId: "ham:celery",
        chance: 100,
        count: 3,
      },
    },
    {
      state: "grow",
      height: [17, 32],
      loots: [
        {
          itemId: "ham:celery",
          chance: 100,
          count: 6,
        },
        {
          itemId: "ham:celery_seeds",
          chance: 100,
          count: 1.5,
        },
      ],
    },
  ],
};

export default CELERY_PLANT;
