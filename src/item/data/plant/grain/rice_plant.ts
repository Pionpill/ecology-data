import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import ricePlantImage from "./rice_plant.png";

const RICE_PLANT_ITEM: ItemData = {
  itemId: "ham:rice_plant",
  quality: Quality.COMMON,
  tags: ["plant", "grain", "cereal"],
  image: ricePlantImage,
};

export default RICE_PLANT_ITEM;
