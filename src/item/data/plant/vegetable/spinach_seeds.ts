import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import spinachSeedsImage from "./spinach_seeds.png";

const SPINACH_SEEDS_ITEM: ItemData = {
  itemId: "ham:spinach_seeds",
  quality: Quality.COMMON,
  tags: ["seed"],
  image: spinachSeedsImage,
};

export default SPINACH_SEEDS_ITEM;
