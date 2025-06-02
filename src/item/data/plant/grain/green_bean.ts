import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import greenBeanImage from "./green_bean.png";

const GREEN_BEAN_ITEM: ItemData = {
  itemId: "ham:green_bean",
  quality: Quality.UNCOMMON,
  tags: ["seed", "plant", "grain", "bean"],
  image: greenBeanImage,
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
};

export default GREEN_BEAN_ITEM;
