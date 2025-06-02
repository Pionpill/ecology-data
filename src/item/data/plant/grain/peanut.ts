import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import peanutImage from "./peanut.png";

const PEANUT_ITEM: ItemData = {
  itemId: "ham:peanut",
  quality: Quality.UNCOMMON,
  tags: ["seed", "plant", "grain", "cookingOil"],
  image: peanutImage,
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
};

export default PEANUT_ITEM;
