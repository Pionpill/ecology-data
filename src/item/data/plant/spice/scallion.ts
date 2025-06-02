import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import scallionImage from "./scallion.png";

const SCALLION_ITEM: ItemData = {
  itemId: "ham:scallion",
  quality: Quality.UNCOMMON,
  tags: ["plant", "spice", "allium"],
  image: scallionImage,
  food: {
    nutrition: 1,
    saturationModifier: "low",
  },
};

export default SCALLION_ITEM;
