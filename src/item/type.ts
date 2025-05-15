import type { Quality } from "../_common/enum";
import type { VanillaItemInfo, VersionData } from "../_common/type";

export enum ItemTag {
  /** 谷物 */
  GRAIN = "grain",
  /** 香料 */
  SPICE = "spice",
  /** 辣椒类 */
  CHILI = "chili",
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

export type ItemData = {
  /** 品质 */
  quality: Quality;
  /** 标签 */
  tags: Array<ItemTag>;
  /** 食品信息 */
  vanillaInfo?: VanillaItemInfo;
  /** 营养信息 */
  nutritionInfo?: NutritionInfo;
} & VersionData;
