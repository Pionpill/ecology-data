import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import riceImage from "./rice.png";

const RICE_ITEM: ItemData = {
  itemId: "ham:rice",
  quality: Quality.COMMON,
  tags: ["material", "hulled"],
  image: riceImage,
};

export default RICE_ITEM;
