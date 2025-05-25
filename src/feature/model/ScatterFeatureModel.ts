import FeatureModel from "./FeatureModel";
import type { FeatureBiomeFilter, FeatureScatterInfo, ScatterFeatureData } from "../type";
import type { Identifier } from "../../_common/type";
import { getPlantPrefixFromBlockId, PlantModel } from "../../plant";
import PLANT_FEATURE_DATA from "../data/plant";

export default class ScatterFeatureModel extends FeatureModel {
  private constructor(
    version: string | undefined,
    beta: boolean | undefined,
    public readonly tags: FeatureBiomeFilter,
    public readonly iterations: number,
    public readonly scatter: FeatureScatterInfo
  ) {
    super(version, beta, tags, iterations);
  }

  private static modelMap: Record<Identifier, ScatterFeatureModel> = {};

  public static fromData = (data: ScatterFeatureData) => {
    const model = ScatterFeatureModel.modelMap[data.scatter.placeBlock];
    if (model) return model;

    const newModel = new ScatterFeatureModel(data.version, data.beta, data.tags, data.iterations, data.scatter);

    ScatterFeatureModel.modelMap[data.scatter.placeBlock] = newModel;
    return newModel;
  };

  /** 通过作物方块 id/prefix 获取缓存的特征实例 */
  public static getByBlockId = (blockId: Identifier) => {
    const blockPrefix = getPlantPrefixFromBlockId(blockId);
    const data = PLANT_FEATURE_DATA.filter((feature) => {
      const featureBlockPrefix = getPlantPrefixFromBlockId(feature.scatter.placeBlock);
      return featureBlockPrefix === blockPrefix;
    });
    if (data.length === 0) {
      throw new Error(`Feature data not found for plant id: ${blockId}`);
    }
    return data.map(ScatterFeatureModel.fromData);
  };

  /** 通过作物种子 id 获取缓存的特征实例 */
  static getBySeedId = (seedId: Identifier) => {
    const blockPrefix = PlantModel.getBySeedId(seedId).blockPrefix;
    return ScatterFeatureModel.getByBlockId(blockPrefix);
  };
}
