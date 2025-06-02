import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import herbSeedsImage from "./herb_seeds.png";

const HERB_SEEDS_ITEM: ItemData = {
  itemId: "ham:herb",
  quality: Quality.COMMON,
  tags: ["seed"],
  image: herbSeedsImage,
};

export default HERB_SEEDS_ITEM;
