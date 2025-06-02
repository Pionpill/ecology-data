import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import leekImage from "./leek.png";

const LEEK_ITEM: ItemData = {
  itemId: "ham:leek",
  quality: Quality.COMMON,
  tags: ["plant", "vegetable", "allium", "green"],
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
  image: leekImage,
};

export default LEEK_ITEM;
