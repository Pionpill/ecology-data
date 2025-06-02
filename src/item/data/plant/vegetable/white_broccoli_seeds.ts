import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import whiteBroccoliSeedsImage from "./white_broccoli_seeds.png";

const WHITE_BROCCOLI_SEEDS_ITEM: ItemData = {
  itemId: "ham:white_broccoli_seeds",
  quality: Quality.COMMON,
  tags: ["seed"],
  image: whiteBroccoliSeedsImage,
};

export default WHITE_BROCCOLI_SEEDS_ITEM;
