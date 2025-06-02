import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import pepperImage from "./pepper.png";

const PEPPER_ITEM: ItemData = {
  itemId: "ham:pepper",
  quality: Quality.COMMON,
  tags: ["plant", "vegetable", "capsicum"],
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
  image: pepperImage,
};

export default PEPPER_ITEM;
