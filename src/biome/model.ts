import { VersionModel } from "../_common/model";
import type { Identifier } from "../_common/type";
import BIOME_DATA from "./data";
import type { BiomeCategory } from "./enum";
import type { BiomeData } from "./type";

export default class BiomeModel extends VersionModel {
  private constructor(
    public readonly biomeId: Identifier,
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

  private static fromData = (data: BiomeData) => {
    return new BiomeModel(
      data.biomeId,
      data.rainfall,
      data.temperature,
      data.generate,
      data.dimension,
      data.category,
      data.snowAccumulation,
      data.tags
    );
  };

  private static modelMap: Record<Identifier, BiomeModel> = {};

  /** 通过群系 id 获取缓存的群系实例 */
  static fromBiomeId = (biomeId: Identifier, refresh: boolean = false) => {
    if (!refresh) {
      const model = BiomeModel.modelMap[biomeId];
      if (model) return model;
    }

    const data = BIOME_DATA.find((biome) => biome.biomeId === biomeId);
    if (!data) {
      throw new Error(`Biome data not found for biomeId: ${biomeId}`);
    }
    BiomeModel.modelMap[biomeId] = BiomeModel.fromData(data);
    return BiomeModel.modelMap[biomeId];
  };
}
