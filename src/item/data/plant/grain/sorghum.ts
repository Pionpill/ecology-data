import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import sorghumImage from "./sorghum.png";

const SORGHUM_ITEM: ItemData = {
  itemId: "ham:sorghum",
  quality: Quality.COMMON,
  tags: ["seed", "plant", "grain", "cereal", "sugar"],
  image: sorghumImage,
};

export default SORGHUM_ITEM;
