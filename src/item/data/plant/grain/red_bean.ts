import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import redBeanImage from "./red_bean.png";

const RED_BEAN_ITEM: ItemData = {
  itemId: "ham:red_bean",
  quality: Quality.UNCOMMON,
  tags: ["seed", "plant", "grain", "bean"],
  image: redBeanImage,
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
};

export default RED_BEAN_ITEM;
