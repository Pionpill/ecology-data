import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import carrotImage from "./carrot.png";

const CARROT_ITEM: ItemData = {
  itemId: "ham:carrot",
  quality: Quality.COMMON,
  tags: ["plant", "vegetable", "tuber"],
  food: {
    nutrition: 2,
    saturationModifier: "normal",
  },
  image: carrotImage,
};

export default CARROT_ITEM;
