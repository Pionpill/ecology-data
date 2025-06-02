import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import whiteCabbageImage from "./white_cabbage.png";

const WHITE_CABBAGE_ITEM: ItemData = {
  itemId: "ham:white_cabbage",
  quality: Quality.COMMON,
  tags: ["plant", "vegetable", "green"],
  food: {
    nutrition: 1,
    saturationModifier: "poor",
  },
  image: whiteCabbageImage,
};

export default WHITE_CABBAGE_ITEM;
