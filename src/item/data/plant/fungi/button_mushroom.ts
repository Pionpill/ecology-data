import { Quality, VanillaEffectId } from "../../../../_common/enum";
import type { ItemData } from "../../../type";
import buttonMushroomImage from "./button_mushroom.png";

const BUTTON_MUSHROOM_ITEM: ItemData = {
  itemId: "ham:button_mushroom",
  quality: Quality.UNCOMMON,
  tags: ["seed", "plant", "fungi"],
  image: buttonMushroomImage,
  food: {
    nutrition: 1,
    saturationModifier: "low",
    effects: [
      {
        name: VanillaEffectId.POISON,
        duration: 5,
        chance: 0.3,
      },
    ],
  },
};

export default BUTTON_MUSHROOM_ITEM;
