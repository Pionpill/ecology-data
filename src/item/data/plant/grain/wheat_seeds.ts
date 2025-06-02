import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import wheatSeedsImage from "./wheat_seeds.png";

const WHEAT_SEEDS_ITEM: ItemData = {
  itemId: "ham:wheat_seeds",
  quality: Quality.COMMON,
  tags: ["seed"],
  image: wheatSeedsImage,
};

export default WHEAT_SEEDS_ITEM;
