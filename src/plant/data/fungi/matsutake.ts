import type { PlantData } from "../../type";

const MATSUTAKE_PLANT: PlantData = {
  beta: false,
  seedId: "ham:matsutake",
  blockPrefix: "ham:matsutake",
  type: "fungi",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 25],
      can: [10, 30],
    },
    rainfall: {
      suit: [60, 80],
      can: [40, 100],
    },
    brightness: {
      suit: [4, 12],
      can: [0, 12],
    },
    fertility: {
      min: 100,
      sensitivity: 50,
      landTag: ["fungi"],
    },
    period: "all",
    outDoor: false,
  },
  stageInfo: [
    {
      state: "seed",
      tick: 100,
      height: [8, 32],
    },
    {
      state: "grow",
      tick: 100,
      height: [12, 32],
      loots: [
        {
          itemId: "ham:matsutake",
          chance: 100,
          count: 2,
        },
      ],
      harvest: {
        count: -1,
        convertBlock: "ham:matsutake_stage_0",
      },
    },
    {
      state: "grow",
      tick: 100,
      height: [22, 32],
      loots: [
        {
          itemId: "ham:matsutake",
          chance: 100,
          count: 4,
        },
      ],
      harvest: {
        count: -1,
        convertBlock: "ham:matsutake_stage_0",
      },
    },
    {
      state: "mature",
      height: [22, 32],
      loots: [
        {
          itemId: "ham:matsutake",
          chance: 100,
          count: 7,
        },
      ],
      harvest: {
        count: -1,
        convertBlock: "ham:matsutake_stage_0",
      },
    },
  ],
};

export default MATSUTAKE_PLANT;
