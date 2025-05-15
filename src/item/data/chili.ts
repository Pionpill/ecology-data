import { Quality, VanillaEffectId } from "../../_common/enum";
import { ItemTag, type ItemData } from "../type";

const CHILI: ItemData = {
  quality: Quality.COMMON,
  tags: [ItemTag.SPICE, ItemTag.CHILI],
  vanillaInfo: {
    foodInfo: {
      nutrition: 0,
      effects: [
        {
          name: VanillaEffectId.INSTANT_DAMAGE,
          duration: 1,
        },
      ],
    },
  },
};

export default CHILI;
