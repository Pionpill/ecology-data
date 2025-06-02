import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import canolaImage from "./canola.png";

const CANOLA_ITEM: ItemData = {
  itemId: "ham:canola",
  quality: Quality.COMMON,
  tags: ["plant", "vegetable", "cookingOil"],
  food: {
    nutrition: 2,
    saturationModifier: "normal",
  },
  image: canolaImage,
};

export default CANOLA_ITEM;
