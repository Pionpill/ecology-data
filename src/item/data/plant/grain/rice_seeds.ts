import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import riceSeedsImage from "./rice_seeds.png";

const RICE_SEEDS_ITEM: ItemData = {
  itemId: "ham:rice_seeds",
  quality: Quality.COMMON,
  tags: ["seed"],
  image: riceSeedsImage,
};

export default RICE_SEEDS_ITEM;
