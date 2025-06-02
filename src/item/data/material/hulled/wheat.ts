import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import wheatImage from "./wheat.png";

const WHEAT_ITEM: ItemData = {
  itemId: "ham:wheat",
  quality: Quality.COMMON,
  tags: ["material", "cereal"],
  image: wheatImage,
};

export default WHEAT_ITEM;
