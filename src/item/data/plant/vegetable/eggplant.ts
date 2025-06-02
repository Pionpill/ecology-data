import { Quality, VanillaEffectId } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import eggplantImage from "./eggplant.png";

const EGGPLANT_ITEM: ItemData = {
  itemId: "ham:eggplant",
  quality: Quality.UNCOMMON,
  tags: ["plant", "vegetable", "solanum"],
  food: {
    nutrition: 1,
    saturationModifier: "normal",
    effects: [
      {
        name: VanillaEffectId.POISON,
        duration: 5,
        chance: 0.2,
      },
    ],
  },
  image: eggplantImage,
};

export default EGGPLANT_ITEM;
