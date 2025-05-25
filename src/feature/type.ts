import type { Identifier, VersionData } from "../_common/type";
import type { BiomeTag } from "../biome/type";

export type FeatureScatterInfo = {
  /** 生成概率 */
  chance: number;
  /** 生成次数 */
  iterations: number;
  /** 生成在上面方块上 */
  placeOn: Identifier[];
  /** 生成的物品 */
  placeBlock: string;
};

export type FeatureOreInfo = {
  /** 矿石数量 */
  count: number;
  /** 替换的方块 */
  replaceBlock: Identifier[];
  /** 生成的物品 */
  placeBlock: string;
};

export type FeatureData = {
  /** 群系标签 */
  tags: FeatureBiomeFilter;
  /** 迭代次数 */
  iterations: number;
} & VersionData;

export type ScatterFeatureData = FeatureData & {
  /** 散点配置 */
  scatter: FeatureScatterInfo;
};

export type OreFeatureData = FeatureData & {
  /** 矿石配置 */
  ore: FeatureOreInfo;
};

export type FeatureBiomeFilter = {
  [K in "and" | "or" | "not"]?: Array<BiomeTag | FeatureBiomeFilter>;
};
