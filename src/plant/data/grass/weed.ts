import type { PlantData } from "../../type";

const WEED_PLANT: PlantData = {
  seedId: "ham:weed_seeds",
  blockPrefix: "ham:weed",
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
          chance: 10,
          count: 1,
        },
        {
          itemId: "ham:soy_bean",
          chance: 2,
          count: 1,
        },
        {
          itemId: "ham:tomato",
          chance: 3,
          count: 1,
        },
        {
          itemId: "ham:herb_seeds",
          chance: 5,
          count: 1,
        },
      ],
    },
  ],
};

export default WEED_PLANT;
