import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import peaImage from "./pea.png";

const PEA_ITEM: ItemData = {
  itemId: "ham:pea",
  quality: Quality.UNCOMMON,
  tags: ["plant", "vegetable", "bean"],
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
  image: peaImage,
};

export default PEA_ITEM;
