import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import sugarcaneImage from "./sugarcane.png";

const SUGARCANE_ITEM: ItemData = {
  itemId: "ham:sugarcane",
  quality: Quality.UNCOMMON,
  tags: ["seed", "plant", "fruit", "sugar"],
  image: sugarcaneImage,
  food: {
    nutrition: 1,
    saturationModifier: "poor",
  },
};

export default SUGARCANE_ITEM;
