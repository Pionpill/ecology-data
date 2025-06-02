import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import garlicImage from "./garlic.png";

const GARLIC_ITEM: ItemData = {
  itemId: "ham:garlic",
  quality: Quality.COMMON,
  tags: ["seed", "plant", "spice", "allium"],
  image: garlicImage,
};

export default GARLIC_ITEM;
