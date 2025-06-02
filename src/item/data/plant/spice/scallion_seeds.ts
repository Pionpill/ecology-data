import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import scallionSeedsImage from "./herb_seeds.png";

const SCALLION_SEEDS_ITEM: ItemData = {
  itemId: "ham:scallion_seeds",
  quality: Quality.COMMON,
  tags: ["seed"],
  image: scallionSeedsImage,
};

export default SCALLION_SEEDS_ITEM;
