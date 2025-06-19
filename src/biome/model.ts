import { VersionModel } from "../_common/model";
import { between, hasIntersection } from "../_common/utils";
import { BIOME_DATA } from "./data";
import type { BiomeCategory, BiomeData, BiomeFilter, BiomeId } from "./type";

export default class BiomeModel extends VersionModel {
  private constructor(
    public readonly biomeId: BiomeId,
    public readonly rainfall: number,
    public readonly temperature: number,
    public readonly generate: number | null,
    public readonly dimension: "overworld" | "the_end" | "nether",
    public readonly category: BiomeCategory,
    public readonly snowAccumulation: [number, number] | null,
    public readonly tags: string[]
  ) {
    super();
  }

  private static modelMap: Partial<Record<BiomeId, BiomeModel>> = {};

  private static fromData = (data: BiomeData) => {
    const model = BiomeModel.modelMap[data.biomeId];
    if (model) return model;

    const newModel = new BiomeModel(
      data.biomeId,
      data.rainfall,
      data.temperature,
      data.generate,
      data.dimension,
      data.category,
      data.snowAccumulation,
      data.tags
    );
    BiomeModel.modelMap[data.biomeId] = newModel;
    return newModel;
  };

  /** 通过群系 id 获取缓存的群系实例 */
  static getById = (biomeId: BiomeId) => {
    const data = BIOME_DATA.find((biome) => biome.biomeId === biomeId);
    if (!data) {
      throw new Error(`Biome data not found for biomeId: ${biomeId}`);
    }
    return BiomeModel.fromData(data);
  };

  /** 通过过滤器获取群系对象 */
  static getByFilter = (filter: BiomeFilter) => {
    const { rainfall, temperature, generate, dimension, category, tags } = filter;
    return BIOME_DATA.reduce((acc, biome) => {
      if (rainfall && !between(biome.rainfall, rainfall)) return acc;
      if (temperature && !between(biome.temperature, temperature)) return acc;
      if (generate && (!biome.generate || !between(biome.generate, generate))) return acc;
      const mergedDimension = dimension instanceof Array ? dimension : [dimension];
      if (dimension && !mergedDimension.includes(biome.dimension)) return acc;
      const mergedCategory = category instanceof Array ? category : [category];
      if (category && !mergedCategory.includes(biome.category)) return acc;
      const mergedTags = tags instanceof Array ? tags : [tags];
      if (tags && !hasIntersection(mergedTags, biome.tags)) return acc;
      return [...acc, BiomeModel.fromData(biome)];
    }, [] as BiomeModel[]);
  };

  /** 获取所有群系对象 */
  static getAll = () => BIOME_DATA.map((biome) => BiomeModel.fromData(biome));
}
