import type { PlantData } from "../../type";

const DICTYOPHORA_PLANT: PlantData = {
  beta: true,
  seedId: "ham:dictyophora",
  blockPrefix: "ham:dictyophora",
  type: "fungi",
  defaultGrowInfo: {
    temperature: {
      suit: [20, 30],
      can: [15, 35],
    },
    rainfall: {
      suit: [60, 90],
      can: [40, 100],
    },
    brightness: {
      suit: [4, 12],
      can: [0, 12],
    },
    fertility: {
      min: 120,
      sensitivity: 50,
      landTag: ["fungi"],
    },
    period: "all",
    outDoor: false,
  },
  stageInfo: [
    {
      state: "seed",
      tick: 30,
      height: [6, 32],
    },
    {
      state: "grow",
      tick: 30,
      height: [6, 32],
      loots: {
        itemId: "ham:dictyophora",
        chance: 100,
        count: 2,
      },
      harvest: {
        convertBlock: "ham:dictyophora_stage_0",
        count: -1,
      },
    },
    {
      state: "mature",
      height: [8, 32],
      loots: {
        itemId: "ham:dictyophora",
        chance: 100,
        count: 3,
      },
      harvest: {
        convertBlock: "ham:dictyophora_stage_0",
        count: -1,
      },
    },
  ],
};

export default DICTYOPHORA_PLANT;
