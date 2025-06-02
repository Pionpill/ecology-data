import { Quality, VanillaEffectId } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import chiliImage from "./chili.png";

const CHILI_ITEM: ItemData = {
  itemId: "ham:chili",
  quality: Quality.COMMON,
  tags: ["seed", "plant", "spice", "capsicum"],
  food: {
    nutrition: 0,
    effects: [
      {
        name: VanillaEffectId.INSTANT_DAMAGE,
        duration: 1,
      },
    ],
  },
  image: chiliImage,
};

export default CHILI_ITEM;
