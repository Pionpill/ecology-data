import { SaturationModifier, type Quality } from "../_common/enum";
import { VersionModel } from "../_common/model";
import type { VanillaItemInfo } from "../_common/type";
import type { ItemTag, NutritionInfo } from "./type";

export default class ItemModel extends VersionModel {
  public readonly quality: Quality;
  public readonly tags: Array<ItemTag>;
  public readonly vanillaItemInfo: Required<VanillaItemInfo>;
  public readonly nutritionInfo: NutritionInfo;

  private constructor(
    version: string | undefined,
    beta: boolean | undefined,
    quality: Quality,
    tags: Array<ItemTag>,
    vanillaItemInfo: VanillaItemInfo,
    nutritionInfo: NutritionInfo
  ) {
    super(version, beta);
    this.quality = quality;
    this.tags = tags;
    this.vanillaItemInfo = {
      maxStackSize: vanillaItemInfo.maxStackSize ?? 64,
      foodInfo: vanillaItemInfo.foodInfo
        ? {
            canAlwaysEat: false,
            coolDownTime: 32,
            effects: [],
            saturationModifier: SaturationModifier.NORMAL,
            usingConvertsTo: null,
            ...vanillaItemInfo.foodInfo,
          }
        : null,
    };
    this.nutritionInfo = nutritionInfo;
  }
}
