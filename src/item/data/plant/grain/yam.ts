import { Quality } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import yamImage from "./yam.png";

const YAM_ITEM: ItemData = {
  itemId: "ham:yam",
  quality: Quality.COMMON,
  tags: ["seed", "plant", "grain", "tuber"],
  image: yamImage,
  food: {
    nutrition: 2,
    saturationModifier: "normal",
  },
};

export default YAM_ITEM;
