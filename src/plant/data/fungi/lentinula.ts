import type { PlantData } from "../../type";

const LENTINULA_PLANT: PlantData = {
  beta: false,
  seedId: "ham:lentinula_seeds",
  blockPrefix: "ham:lentinula",
  type: "fungi",
  defaultGrowInfo: {
    temperature: {
      suit: [20, 25],
      can: [10, 30],
    },
    rainfall: {
      suit: [80, 100],
      can: [40, 100],
    },
    brightness: {
      suit: [4, 12],
      can: [0, 12],
    },
    fertility: {
      min: 100,
      sensitivity: 60,
      landTag: ["wood"],
    },
    period: "all",
    outDoor: false,
  },
  stageInfo: [
    {
      state: "seed",
      tick: 11,
      height: [8, 32],
    },
    {
      state: "grow",
      tick: 11,
      height: [12, 32],
    },
    {
      state: "grow",
      tick: 11,
      height: [14, 32],
    },
    {
      state: "mature",
      height: [14, 32],
      loots: [
        {
          itemId: "ham:lentinula",
          chance: 100,
          count: 3,
        },
      ],
      harvest: {
        convertBlock: "ham:lentinula_stage_0",
        count: 3,
      },
    },
  ],
};

export default LENTINULA_PLANT;
