import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import sweetPotatoImage from "./sweet_potato.png";

const SWEET_POTATO_ITEM: ItemData = {
  itemId: "ham:sweet_potato",
  quality: Quality.COMMON,
  tags: ["seed", "plant", "grain", "tuber"],
  image: sweetPotatoImage,
  food: {
    nutrition: 2,
    saturationModifier: "normal",
  },
};

export default SWEET_POTATO_ITEM;
