import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import strawberryImage from "./strawberry.png";

const STRAWBERRY_ITEM: ItemData = {
  itemId: "ham:strawberry",
  quality: Quality.UNCOMMON,
  tags: ["seed", "plant", "fruit", "berry"],
  image: strawberryImage,
  food: {
    nutrition: 1,
    saturationModifier: "low",
  },
};

export default STRAWBERRY_ITEM;
