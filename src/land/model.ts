import { VersionModel } from "../_common/model";
import type { Identifier } from "../_common/type";
import LAND_DATA from "./data";
import type { LandData, LandStateData, LandTag } from "./type";

export default class LandModel extends VersionModel {
  public readonly blockId: Identifier;
  public readonly tags: LandTag[];
  public readonly fertility: number;
  private readonly stateInfo: LandStateData[];

  constructor(
    version: string | undefined,
    beta: boolean | undefined,
    blockId: Identifier,
    tags: LandTag | LandTag[],
    fertility: number,
    stateData?: LandStateData | LandStateData[]
  ) {
    super(version, beta);
    this.blockId = blockId;
    this.tags = Array.isArray(tags) ? tags : [tags];
    this.fertility = fertility;
    this.stateInfo = Array.isArray(stateData) ? stateData : stateData ? [stateData] : [];
  }

  getStateInfo(state: { attribute: string; value: number }) {
    return {
      fertility: this.stateInfo.find((s) => s.attribute === state.attribute && s.value === state.value)?.fertility,
    };
  }

  private static modelMap: Record<Identifier, LandModel> = {};

  private static fromData = (data: LandData) => {
    return new LandModel(data.version, data.beta, data.blockId, data.tags, data.fertility, data.state);
  };

  /** 通过方块 id 获取缓存的土地实例 */
  static fromBlockId = (blockId: Identifier, refresh: boolean = false) => {
    if (!refresh) {
      const model = LandModel.modelMap[blockId];
      if (model) return model;
    }

    const data = LAND_DATA.find((land) => land.blockId === blockId);
    if (!data) {
      throw new Error(`Land data not found for blockId: ${blockId}`);
    }
    LandModel.modelMap[blockId] = LandModel.fromData({ ...data, blockId });
    return LandModel.modelMap[blockId];
  };
}
