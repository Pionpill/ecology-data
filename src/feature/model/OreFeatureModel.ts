import type { Identifier } from "../../_common/type";
import { getPlantPrefixFromBlockId, PlantModel } from "../../plant";
import ORE_FEATURE_DATA from "../data/ore";
import type { FeatureBiomeFilter, FeatureOreInfo, OreFeatureData } from "../type";
import FeatureModel from "./FeatureModel";

export default class OreFeatureModel extends FeatureModel {
  private constructor(
    version: string | undefined,
    beta: boolean | undefined,
    public readonly tags: FeatureBiomeFilter,
    public readonly iterations: number,
    public readonly ore: FeatureOreInfo
  ) {
    super(version, beta, tags, iterations);
  }

  private static modelMap: Record<Identifier, OreFeatureModel> = {};

  public static fromData = (data: OreFeatureData) => {
    const model = OreFeatureModel.modelMap[data.ore.placeBlock];
    if (model) return model;

    const newModel = new OreFeatureModel(data.version, data.beta, data.tags, data.iterations, data.ore);

    OreFeatureModel.modelMap[data.ore.placeBlock] = newModel;
    return newModel;
  };

  /** 通过作物方块 id/prefix 获取缓存的特征实例 */
  public static getByBlockId = (blockId: Identifier) => {
    const blockPrefix = getPlantPrefixFromBlockId(blockId);
    const data = ORE_FEATURE_DATA.filter((feature) => {
      const featureBlockPrefix = getPlantPrefixFromBlockId(feature.ore.placeBlock);
      return featureBlockPrefix === blockPrefix;
    });
    if (data.length === 0) {
      throw new Error(`Feature data not found for plant id: ${blockId}`);
    }
    return data.map(OreFeatureModel.fromData);
  };

  /** 通过作物种子 id 获取缓存的特征实例 */
  static getBySeedId = (seedId: Identifier) => {
    const blockPrefix = PlantModel.getBySeedId(seedId).blockPrefix;
    return OreFeatureModel.getByBlockId(blockPrefix);
  };

  /** 获取所有特征实例 */
  static getAll = () => ORE_FEATURE_DATA.map((feature) => OreFeatureModel.fromData(feature));
}
