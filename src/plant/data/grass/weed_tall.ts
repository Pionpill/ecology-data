import type { PlantData } from "../../type";

const WEED_TALL_PLANT: PlantData = {
  seedId: "ham:weed_tall_seeds",
  blockPrefix: "ham:weed_tall",
  type: "grass",
  defaultGrowInfo: {
    temperature: {
      suit: [10, 30],
      can: [-20, 40],
    },
    rainfall: {
      suit: [40, 80],
      can: [0, 100],
    },
    brightness: {
      suit: [9, 15],
      can: [5, 15],
    },
    fertility: {
      min: 40,
      sensitivity: 60,
      landTag: ["dirt", "stone"],
    },
    period: "sun",
    outDoor: false,
  },
  stageInfo: [
    {
      state: "mature",
      height: [30, 32],
      loots: [
        {
          itemId: "ham:rice_seeds",
          chance: 20,
          count: 1,
        },
        {
          itemId: "ham:corn",
          chance: 3,
          count: 1,
        },
        {
          itemId: "ham:lentinula",
          chance: 2,
          count: 1,
        },
        {
          itemId: "ham:ginger",
          chance: 1,
          count: 1,
        },
        {
          itemId: "ham:red_bean",
          chance: 1,
          count: 1,
        },
        {
          itemId: "ham:green_bean",
          chance: 1,
          count: 1,
        },
        {
          itemId: "ham:peanut",
          chance: 1,
          count: 1,
        },
      ],
    },
  ],
};

export default WEED_TALL_PLANT;
