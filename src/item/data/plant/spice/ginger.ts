import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import gingerImage from "./ginger.png";

const GINGER_ITEM: ItemData = {
  itemId: "ham:ginger",
  quality: Quality.UNCOMMON,
  tags: ["seed", "plant", "spice", "zingiber"],
  image: gingerImage,
};

export default GINGER_ITEM;
