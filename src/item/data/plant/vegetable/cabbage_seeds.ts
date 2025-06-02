import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import cabbageSeedsImage from "./cabbage_seeds.png";

const CABBAGE_SEEDS_ITEM: ItemData = {
  itemId: "ham:cabbage_seeds",
  quality: Quality.COMMON,
  tags: ["seed"],
  image: cabbageSeedsImage,
};

export default CABBAGE_SEEDS_ITEM;
