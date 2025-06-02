import { Quality, VanillaEffectId } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import woodEarImage from "./wood_ear.png";

const WOOD_EAR_ITEM: ItemData = {
  itemId: "ham:wood_ear",
  quality: Quality.UNCOMMON,
  tags: ["seed", "plant", "fungi"],
  image: woodEarImage,
  food: {
    nutrition: 1,
    saturationModifier: "low",
    effects: [
      {
        name: VanillaEffectId.POISON,
        duration: 5,
        chance: 0.2,
      },
    ],
  },
};

export default WOOD_EAR_ITEM;
