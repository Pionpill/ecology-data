import type { Quality } from "../_common/enum";
import type { EffectInfo, VersionData } from "../_common/type";
import type { PlantType } from "../plant";
import type { MaterialType } from "../plant/type";
import type { ITEM_ID, ITEM_TYPE, PLANT_FAMILY, PLANT_PRODUCT, SATURATION_MODIFIER } from "./data";

/** 物品分类科目 */
export type ItemType = (typeof ITEM_TYPE)[number];

/** 作物科目 */
export type PlantFamily = (typeof PLANT_FAMILY)[number];

/** 作物产物 */
export type PlantProduce = (typeof PLANT_PRODUCT)[number];

export type ItemId = (typeof ITEM_ID)[number];

/** 营养调整值 */
export type SaturationModifier = (typeof SATURATION_MODIFIER)[number];

export type NutritionInfo = {
  /** 能量，与 nutrition 相同，但可能不能吃 */
  energy: number;
  /** 蛋白质 */
  protein: number;
  /** 脂肪 */
  fat: number;
  /** 膳食纤维 */
  fiber: number;
  /** 维生素 */
  vitamin: number;
};

export type VanillaItemInfo = {
  /** 最大堆叠量 */
  maxStackSize?: 64 | 32 | 16 | 8 | 4 | 2 | 1;
};

/** 食物信息 */
export type VanillaFoodInfo = {
  /** 是否可以一直食用，默认 false */
  canAlwaysEat?: boolean;
  /** 冷却时间，默认 32 */
  coolDownTime?: number;
  /** 使用后效果 */
  effects?: Array<EffectInfo>;
  /** 饱食度 */
  nutrition: number;
  /** 饱食度修饰，默认 NORMAL */
  saturationModifier?: SaturationModifier;
  /** 使用后转换为的物品，默认 null */
  usingConvertsTo?: string | null;
};

export type ItemTag = ItemType | PlantType | PlantFamily | PlantProduce | MaterialType;

export type ItemData = {
  /** 物品 id */
  itemId: ItemId;
  /** 设计的品质 */
  quality: Quality;
  /** 标签 */
  tags: ItemTag[];
  /** 食物信息 */
  food?: VanillaFoodInfo;
  /** 营养信息 */
  nutrition?: NutritionInfo;
  /** 图标 */
  image?: string;
  /** 原版属性 */
  vanilla?: VanillaItemInfo;
} & VersionData;

export type ItemFilter = {
  quality?: Quality[];
  tags?: ItemTag[];
  food?: {
    nutrition?: [number, number];
    effectIds?: string[];
  };
};
