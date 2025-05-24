import type { PlantData } from "../../type";

const YAM_PLANT: PlantData = {
  seedId: "ham:yam",
  blockPrefix: "ham:yam",
  type: "grain",
  defaultGrowInfo: {
    temperature: {
      suit: [20, 35],
      can: [10, 40],
    },
    rainfall: {
      suit: [50, 70],
      can: [30, 90],
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
  },
  stageInfo: [
    {
      state: "seed",
      tick: 30,
      height: [8, 32],
    },
    {
      state: "grow",
      tick: 30,
      height: [8, 32],
    },
    {
      state: "grow",
      tick: 30,
      height: [14, 32],
    },
    {
      state: "mature",
      height: [20, 32],
      loots: {
        itemId: "ham:yam",
        chance: 100,
        count: 6,
      },
    },
  ],
};

export default YAM_PLANT;
