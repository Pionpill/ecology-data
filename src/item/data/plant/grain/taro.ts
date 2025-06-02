import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import taroImage from "./taro.png";

const TARO_ITEM: ItemData = {
  itemId: "ham:taro",
  quality: Quality.COMMON,
  tags: ["seed", "plant", "grain", "tuber"],
  image: taroImage,
  food: {
    nutrition: 2,
    saturationModifier: "normal",
  },
};

export default TARO_ITEM;
