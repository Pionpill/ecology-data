import type { Identifier } from "../_common/type";
import type { BiomeTag } from "../biome/enum";
import { PlantModel } from "../plant";
import { getPlantPrefixFromBlockId } from "../plant/utils";
import FEATURE_DATA from "./data";
import type { FeatureData } from "./type";

export default class FeatureModel {
  private constructor(
    public readonly type: string,
    public readonly tags: BiomeTag[],
    public readonly iterations: number,
    public readonly chance: number,
    public readonly placeOn: Identifier[],
    public readonly placeBlock: string
  ) {}

  private static fromData = (data: FeatureData) => {
    return new FeatureModel(data.type, data.tags, data.iterations, data.chance, data.placeOn, data.placeBlock);
  };

  private static modelMap: Record<Identifier, FeatureModel> = {};

  /** 通过作物方块 id 获取缓存的特征实例 */
  static fromPlantId = (plantBlockId: Identifier) => {
    const blockPrefix = getPlantPrefixFromBlockId(plantBlockId);
    const model = FeatureModel.modelMap[blockPrefix];
    if (model) return model;

    const data = FEATURE_DATA.find((feature) => {
      const featureBlockPrefix = getPlantPrefixFromBlockId(feature.placeBlock);
      return featureBlockPrefix === blockPrefix;
    });
    if (!data) {
      throw new Error(`Feature data not found for plant id: ${plantBlockId}`);
    }
    FeatureModel.modelMap[blockPrefix] = FeatureModel.fromData(data);
    return FeatureModel.modelMap[blockPrefix];
  };

  /** 通过作物种子 id 获取缓存的特征实例 */
  static fromSeedId = (seedId: Identifier) => {
    const blockPrefix = PlantModel.fromSeedId(seedId).blockPrefix;
    return FeatureModel.fromPlantId(blockPrefix);
  };
}
