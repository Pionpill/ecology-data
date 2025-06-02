import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import bokChoySeedsImage from "./bok_choy_seeds.png";

const BOK_CHOY_SEEDS_ITEM: ItemData = {
  itemId: "ham:bok_choy_seeds",
  quality: Quality.COMMON,
  tags: ["seed"],
  image: bokChoySeedsImage,
};

export default BOK_CHOY_SEEDS_ITEM;
