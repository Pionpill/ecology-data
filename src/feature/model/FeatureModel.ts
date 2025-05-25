import { VersionModel } from "../../_common/model";
import type { BiomeTag } from "../../biome";
import type { FeatureBiomeFilter } from "../type";

export default abstract class FeatureModel extends VersionModel {
  protected constructor(
    version: string | undefined,
    beta: boolean | undefined,
    public readonly tags: FeatureBiomeFilter,
    public readonly iterations: number
  ) {
    super(version, beta);
  }

  /** 判断是否有某个群系标签 */
  hasTag(tag: BiomeTag) {
    const checkFilter = (filter: FeatureBiomeFilter): boolean => {
      if (filter.and) {
        return filter.and.some((subTag) => (typeof subTag === "string" ? subTag === tag : checkFilter(subTag)));
      }
      if (filter.or) {
        return filter.or.some((subTag) => (typeof subTag === "string" ? subTag === tag : checkFilter(subTag)));
      }
      if (filter.not) {
        return !filter.not.some((subTag) => (typeof subTag === "string" ? subTag === tag : checkFilter(subTag)));
      }
      return false;
    };

    return checkFilter(this.tags);
  }
}
