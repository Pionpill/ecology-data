import type { PlantData } from "../../type";

const GINGER_PLANT: PlantData = {
  beta: true,
  seedId: "ham:ginger",
  blockPrefix: "ham:ginger",
  type: "spice",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 30],
      can: [5, 35],
    },
    rainfall: {
      suit: [50, 70],
      can: [30, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 70,
      sensitivity: 20,
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
      tick: 40,
      height: [8, 32],
    },
    {
      state: "grow",
      tick: 40,
      height: [15, 32],
    },
    {
      state: "grow",
      tick: 40,
      height: [23, 32],
    },
    {
      state: "mature",
      height: [29, 32],
      loots: {
        itemId: "ham:ginger",
        chance: 100,
        count: 6,
      },
    },
  ],
};

export default GINGER_PLANT;
