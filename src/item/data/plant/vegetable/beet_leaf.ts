import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import beetLeafImage from "./beet_leaf.png";

const BEET_LEAF_ITEM: ItemData = {
  itemId: "ham:beet_leaf",
  quality: Quality.COMMON,
  tags: ["seed", "plant", "vegetable"],
  food: {
    nutrition: 1,
    saturationModifier: "low",
  },
  image: beetLeafImage,
};

export default BEET_LEAF_ITEM;
