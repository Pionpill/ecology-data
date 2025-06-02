import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import tomatoImage from "./tomato.png";

const TOMATO_ITEM: ItemData = {
  itemId: "ham:tomato",
  quality: Quality.UNCOMMON,
  tags: ["plant", "vegetable", "solanum"],
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
  image: tomatoImage,
};

export default TOMATO_ITEM;
