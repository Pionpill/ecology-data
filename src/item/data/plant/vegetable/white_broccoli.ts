import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import whiteBroccoliImage from "./white_broccoli.png";

const WHITE_BROCCOLI_ITEM: ItemData = {
  itemId: "ham:white_broccoli",
  quality: Quality.UNCOMMON,
  tags: ["plant", "vegetable"],
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
  image: whiteBroccoliImage,
};

export default WHITE_BROCCOLI_ITEM;
