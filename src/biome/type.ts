import type { BIOME_CATEGORY, BIOME_DIMENSION, BIOME_ID, BIOME_TAG } from "./data";

/** 生物群系 */
export type BiomeData = {
  /** 群系id */
  biomeId: BiomeId;
  /** 降雨量 0-1 */
  rainfall: number;
  /** 温度 *20 */
  temperature: number;
  /** 生成概率（万分之） */
  generate: number | null;
  /** 维度 */
  dimension: Dimension;
  /** 分类 */
  category: BiomeCategory;
  /** 雪层厚度 */
  snowAccumulation: [number, number] | null;
  /** 标签 */
  tags: BiomeTag[];
};

export type BiomeFilter = {
  /** 降雨范围 */
  rainfall: [number, number];
  /** 温度范围 */
  temperature: [number, number];
  /** 生成概率范围 */
  generate: [number, number];
  /** 所属维度 */
  dimension: Dimension | Dimension[];
  /** 所属分类 */
  category: BiomeCategory | BiomeCategory[];
  /** 标签 */
  tags: BiomeTag | BiomeTag[];
};

export type Dimension = (typeof BIOME_DIMENSION)[number];
export type BiomeId = (typeof BIOME_ID)[number];
export type BiomeCategory = (typeof BIOME_CATEGORY)[number];
export type BiomeTag = (typeof BIOME_TAG)[number];
