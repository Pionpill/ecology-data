import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import celerySeedsImage from "./celery_seeds.png";

const LETTUCE_SEEDS_ITEM: ItemData = {
  itemId: "ham:spinach_seeds",
  quality: Quality.COMMON,
  tags: ["seed"],
  image: celerySeedsImage,
};

export default LETTUCE_SEEDS_ITEM;
