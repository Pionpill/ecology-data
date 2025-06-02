import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import whiteCabbageSeedsImage from "./white_cabbage_seeds.png";

const WHITE_CABBAGE_SEEDS_ITEM: ItemData = {
  itemId: "ham:white_cabbage_seeds",
  quality: Quality.COMMON,
  tags: ["seed"],
  image: whiteCabbageSeedsImage,
};

export default WHITE_CABBAGE_SEEDS_ITEM;
