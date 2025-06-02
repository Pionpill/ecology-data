import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import celerySeedsImage from "./celery_seeds.png";

const CELERY_SEEDS_ITEM: ItemData = {
  itemId: "ham:celery_seeds",
  quality: Quality.COMMON,
  tags: ["seed"],
  image: celerySeedsImage,
};

export default CELERY_SEEDS_ITEM;
