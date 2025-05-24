import type { PlantData } from "../../type";

const BUTTON_MUSHROOM_PLANT: PlantData = {
  beta: false,
  seedId: "ham:button_mushroom",
  blockPrefix: "button_mushroom",
  type: "fungi",
  defaultGrowInfo: {
    temperature: {
      suit: [15, 25],
      can: [5, 30],
    },
    rainfall: {
      suit: [60, 100],
      can: [40, 100],
    },
    brightness: {
      suit: [8, 12],
      can: [4, 15],
    },
    fertility: {
      min: 80,
      sensitivity: 60,
      landTag: ["fungi"],
    },
    period: "all",
    outDoor: false,
  },
  stageInfo: [
    {
      state: "seed",
      tick: 10,
      height: [2, 32],
    },
    {
      state: "grow",
      tick: 10,
      height: [4, 32],
    },
    {
      state: "grow",
      tick: 10,
      height: [5, 32],
      loots: {
        itemId: "ham:button_mushroom",
        chance: 100,
        count: 2,
      },
    },
    {
      state: "mature",
      height: [7, 32],
      loots: {
        itemId: "ham:button_mushroom",
        chance: 100,
        count: 3,
      },
    },
  ],
};

export default BUTTON_MUSHROOM_PLANT;
