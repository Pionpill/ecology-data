import { Quality, VanillaEffectId } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import matsutakeImage from "./matsutake.png";

const MATSUTAKE_ITEM: ItemData = {
  itemId: "ham:matsutake",
  quality: Quality.RARE,
  tags: ["seed", "plant", "fungi"],
  image: matsutakeImage,
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
  vanilla: {
    maxStackSize: 32,
  },
};

export default MATSUTAKE_ITEM;
