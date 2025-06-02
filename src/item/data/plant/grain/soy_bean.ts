import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import greenBeanImage from "./soy_bean.png";

const SOY_BEAN_ITEM: ItemData = {
  itemId: "ham:soy_bean",
  quality: Quality.UNCOMMON,
  tags: ["seed", "plant", "grain", "bean", "cookingOil"],
  image: greenBeanImage,
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
};

export default SOY_BEAN_ITEM;
