import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import lettuceImage from "./lettuce.png";

const LETTUCE_ITEM: ItemData = {
  itemId: "ham:lettuce",
  quality: Quality.UNCOMMON,
  tags: ["plant", "vegetable", "green"],
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
  image: lettuceImage,
};

export default LETTUCE_ITEM;
