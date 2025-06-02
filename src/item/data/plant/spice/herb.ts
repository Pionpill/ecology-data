import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import herbImage from "./herb.png";

const HERB_ITEM: ItemData = {
  itemId: "ham:herb",
  quality: Quality.COMMON,
  tags: ["plant", "spice"],
  image: herbImage,
};

export default HERB_ITEM;
