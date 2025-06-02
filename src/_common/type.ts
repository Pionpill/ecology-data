import type { VanillaEffectId } from "./enum";

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

/** 支持的语言：中文，英文 */
export type LangType = "zh" | "en";
