import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import cabbageImage from "./cabbage.png";

const CABBAGE_ITEM: ItemData = {
  itemId: "ham:cabbage",
  quality: Quality.UNCOMMON,
  tags: ["plant", "vegetable"],
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
  image: cabbageImage,
};

export default CABBAGE_ITEM;
