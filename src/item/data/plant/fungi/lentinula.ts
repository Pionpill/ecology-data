import { Quality, VanillaEffectId } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import lentinulaImage from "./lentinula.png";

const LENTINULA_ITEM: ItemData = {
  itemId: "ham:lentinula",
  quality: Quality.UNCOMMON,
  tags: ["seed", "plant", "fungi"],
  image: lentinulaImage,
  food: {
    nutrition: 1,
    saturationModifier: "low",
    effects: [
      {
        name: VanillaEffectId.POISON,
        duration: 5,
        chance: 0.5,
      },
    ],
  },
};

export default LENTINULA_ITEM;
