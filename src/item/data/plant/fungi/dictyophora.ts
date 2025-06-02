import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import dictyophoraImage from "./dictyophora.png";

const DICTYOPHORA_ITEM: ItemData = {
  itemId: "ham:dictyophora",
  quality: Quality.RARE,
  tags: ["seed", "plant", "fungi"],
  image: dictyophoraImage,
  food: {
    nutrition: 1,
    saturationModifier: "low",
  },
  vanilla: {
    maxStackSize: 32,
  },
};

export default DICTYOPHORA_ITEM;
