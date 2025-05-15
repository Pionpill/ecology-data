import type { SaturationModifier, VanillaEffectId } from "./enum";

/** 命名空间 ID，格式为 namespace:name */
export type Identifier = string;

export type VersionData = {
  /** 是否在测试版中出现, 默认 true */
  beta?: boolean;
  /** 上线版本 */
  version?: string;
};

/** 作物掉落信息 */
export type LootInfo = {
  /** 掉落物品 */
  itemId: Identifier;
  /** 掉落概率 */
  chance: number;
  /** 掉落数量，可以是小数 */
  count: number;
};

export type EffectInfo = {
  /** 效果名称 */
  name: VanillaEffectId;
  /** 概率，默认 1.0 */
  chance?: number;
  /** 持续时间，默认 30 */
  duration?: number;
  /** 强度，默认 0 */
  amplifier?: number;
};

/** 基础物品信息 */
export type VanillaItemInfo = {
  maxStackSize?: 64 | 32 | 16 | 8 | 4 | 2 | 1;
  foodInfo?: VanillaFoodInfo | null;
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
