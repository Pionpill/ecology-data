import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import spinachImage from "./spinach.png";

const SPINACH_ITEM: ItemData = {
  itemId: "ham:spinach",
  quality: Quality.COMMON,
  tags: ["plant", "vegetable", "green"],
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
  image: spinachImage,
};

export default SPINACH_ITEM;
