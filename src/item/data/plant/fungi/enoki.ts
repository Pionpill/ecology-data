import { Quality, VanillaEffectId } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import enokiImage from "./enoki.png";

const ENOKI_ITEM: ItemData = {
  itemId: "ham:enoki",
  quality: Quality.UNCOMMON,
  tags: ["seed", "plant", "fungi"],
  image: enokiImage,
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

export default ENOKI_ITEM;
