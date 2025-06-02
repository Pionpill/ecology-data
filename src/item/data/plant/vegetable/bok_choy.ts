import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import bokChoyImage from "./bok_choy.png";

const BOK_CHOY_ITEM: ItemData = {
  itemId: "ham:bok_choy",
  quality: Quality.COMMON,
  tags: ["plant", "vegetable", "green"],
  food: {
    nutrition: 1,
    saturationModifier: "low",
  },
  image: bokChoyImage,
};

export default BOK_CHOY_ITEM;
