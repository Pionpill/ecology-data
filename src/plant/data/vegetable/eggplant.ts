import type { PlantData } from "../../type";

const EGGPLANT_PLANT: PlantData = {
  beta: true,
  seedId: "ham:eggplant",
  blockPrefix: "ham:eggplant",
  type: "vegetable",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 30],
      can: [5, 40],
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
      sensitivity: 50,
      landTag: ["dirt"],
    },
    period: "sun",
    outDoor: false,
  },
  stageInfo: [
    {
      state: "seed",
      tick: 10,
      height: [13, 32],
    },
    {
      state: "grow",
      tick: 10,
      height: [24, 32],
    },
    {
      state: "flower",
      tick: 14,
      height: [37, 32],
    },
    {
      state: "mature",
      height: [44, 32],
      loots: {
        itemId: "ham:eggplant",
        chance: 100,
        count: 3,
      },
      harvest: {
        count: 3,
        convertBlock: "ham:eggplant_stage_2",
      },
    },
  ],
};

export default EGGPLANT_PLANT;
