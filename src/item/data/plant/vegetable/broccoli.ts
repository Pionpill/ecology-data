import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import broccoliImage from "./broccoli.png";

const BROCCOLI_ITEM: ItemData = {
  itemId: "ham:broccoli",
  quality: Quality.RARE,
  tags: ["plant", "vegetable", "green"],
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
  image: broccoliImage,
};

export default BROCCOLI_ITEM;
