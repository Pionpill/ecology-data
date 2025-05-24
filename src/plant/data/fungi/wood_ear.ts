import type { PlantData } from "../../type";

const WOOD_EAR_PLANT: PlantData = {
  seedId: "ham:wood_ear",
  blockPrefix: "ham:wood_ear",
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
    outDoor: false,
    period: "all",
  },
  stageInfo: [
    {
      state: "seed",
      tick: 11,
      height: [11, 32],
    },
    {
      state: "grow",
      tick: 11,
      height: [11, 32],
    },
    {
      state: "mature",
      height: [11, 32],
      loots: {
        itemId: "ham:wood_ear",
        chance: 100,
        count: 3,
      },
      harvest: {
        convertBlock: "ham:wood_ear_stage_0",
        count: -1,
      },
    },
  ],
};

export default WOOD_EAR_PLANT;
