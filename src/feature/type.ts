import type { Identifier } from "../_common/type";
import type { BiomeTag } from "../biome/enum";

export type FeatureData = {
  /** 类型 */
  type: "scatter";
  /** 群系标签 */
  tags: BiomeTag[];
  /** 迭代次数 */
  iterations: number;
  /** 生成概率，百分之 */
  chance: number;
  /** 生成在上面方块上 */
  placeOn: Identifier[];
  /** 生成的物品 */
  placeBlock: string;
};
