import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import wheatPlantImage from "./wheat_plant.png";

const WHEAT_PLANT_ITEM: ItemData = {
  itemId: "ham:wheat_plant",
  quality: Quality.COMMON,
  tags: ["plant", "grain", "cereal"],
  image: wheatPlantImage,
};

export default WHEAT_PLANT_ITEM;
