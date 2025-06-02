import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import onionImage from "./onion.png";

const ONION_ITEM: ItemData = {
  itemId: "ham:onion",
  quality: Quality.UNCOMMON,
  tags: ["plant", "vegetable", "allium"],
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
  image: onionImage,
};

export default ONION_ITEM;
