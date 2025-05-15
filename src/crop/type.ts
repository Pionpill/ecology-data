import type { Quality } from "../_common/enum";
import type { VanillaFoodInfo, VanillaItemInfo, VersionData } from "../_common/type";

export enum CropTag {
  /** 谷物 */
  GRAIN = "grain",
}

export type NutritionInfo = {
  /** 蛋白质 */
  protein: number;
  /** 脂肪 */
  fat: number;
  /** 膳食纤维 */
  fiber: number;
  /** 维生素 */
  vitamin: number;
};

export type CropData = {
  /** 品质 */
  quality: Quality;
  /** 标签 */
  tags: Array<CropTag>;
  /** 食品信息 */
  vanillaFoodInfo: VanillaFoodInfo;
  /** 营养信息 */
  nutritionInfo: NutritionInfo;
  /** 基础物品信息 */
  itemInfo: VanillaItemInfo;
} & VersionData;
