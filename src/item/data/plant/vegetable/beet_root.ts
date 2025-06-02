import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import beetRootImage from "./beet_root.png";

const BEET_ROOT_ITEM: ItemData = {
  itemId: "ham:beet_root",
  quality: Quality.COMMON,
  tags: ["seed", "plant", "vegetable", "tuber", "sugar"],
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
  image: beetRootImage,
};

export default BEET_ROOT_ITEM;
