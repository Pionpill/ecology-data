import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import celeryImage from "./celery.png";

const CELERY_ITEM: ItemData = {
  itemId: "ham:celery",
  quality: Quality.UNCOMMON,
  tags: ["plant", "vegetable", "green"],
  food: {
    nutrition: 1,
    saturationModifier: "normal",
  },
  image: celeryImage,
};

export default CELERY_ITEM;
