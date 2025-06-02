import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import potatoImage from "./potato.png";

const POTATO_ITEM: ItemData = {
  itemId: "ham:potato",
  quality: Quality.COMMON,
  tags: ["seed", "plant", "grain", "tuber"],
  image: potatoImage,
  food: {
    nutrition: 2,
    saturationModifier: "normal",
  },
};

export default POTATO_ITEM;
