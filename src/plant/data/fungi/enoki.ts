import type { PlantData } from "../../type";

const ENOKI_PLANT: PlantData = {
  beta: true,
  seedId: "ham:enoki",
  blockPrefix: "ham:enoki",
  type: "fungi",
  defaultGrowInfo: {
    temperature: {
      suit: [10, 25],
      can: [0, 30],
    },
    rainfall: {
      suit: [60, 100],
      can: [40, 100],
    },
    brightness: {
      suit: [4, 12],
      can: [0, 12],
    },
    fertility: {
      min: 100,
      sensitivity: 40,
      landTag: ["wood"],
    },
    period: "all",
  },
  stageInfo: [
    {
      state: "seed",
      tick: 20,
      height: [9, 32],
    },
    {
      state: "grow",
      tick: 20,
      height: [17, 32],
      loots: [
        {
          itemId: "ham:enoki",
          chance: 100,
          count: 2,
        },
      ],
      harvest: {
        convertBlock: "ham:enoki_stage_0",
        count: -1,
      },
    },
    {
      state: "mature",
      height: [23, 32],
      loots: [
        {
          itemId: "ham:enoki",
          chance: 100,
          count: 3,
        },
      ],
      harvest: {
        convertBlock: "ham:enoki_stage_0",
        count: -1,
      },
    },
  ],
};

export default ENOKI_PLANT;
