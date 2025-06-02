import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import cornImage from "./corn.png";

const CORN_ITEM: ItemData = {
  itemId: "ham:corn",
  quality: Quality.UNCOMMON,
  tags: ["seed", "plant", "grain", "cereal"],
  image: cornImage,
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
};

export default CORN_ITEM;
