import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import whiteCarrotImage from "./white_carrot.png";

const WHITE_CARROT_ITEM: ItemData = {
  itemId: "ham:white_carrot",
  quality: Quality.COMMON,
  tags: ["plant", "vegetable", "tuber"],
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
  image: whiteCarrotImage,
};

export default WHITE_CARROT_ITEM;
