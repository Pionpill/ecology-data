import type { Identifier } from "../_common/type";
import type { BiomeCategory } from "./enum";

export type BiomeData = {
  /** 群系id */
  biomeId: Identifier;
  /** 降雨量 0-1 */
  rainfall: number;
  /** 温度 *20 */
  temperature: number;
  /** 生成概率（万分之） */
  generate: number | null;
  /** 维度 */
  dimension: "overworld" | "the_end" | "nether";
  /** 分类 */
  category: BiomeCategory;
  /** 雪层厚度 */
  snowAccumulation: [number, number] | null;
  /** 标签 */
  tags: string[];
};
