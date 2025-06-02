import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import leekSeedsImage from "./leek_seeds.png";

const LEEK_SEEDS_ITEM: ItemData = {
  itemId: "ham:leek_seeds",
  quality: Quality.COMMON,
  tags: ["seed"],
  image: leekSeedsImage,
};

export default LEEK_SEEDS_ITEM;
