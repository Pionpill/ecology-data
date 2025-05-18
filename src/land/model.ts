import { VersionModel } from "../_common/model";
import { between, hasIntersection } from "../_common/utils";
import { LAND_DATA } from "./data";
import type { LandData, LandFilter, LandId, LandStateData, LandTag } from "./type";

export default class LandModel extends VersionModel {
  public readonly blockId: LandId;
  public readonly tags: LandTag[];
  public readonly fertility: number;
  private readonly stateInfo: LandStateData[];

  constructor(
    version: string | undefined,
    beta: boolean | undefined,
    blockId: LandId,
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

  private static modelMap: Partial<Record<LandId, LandModel>> = {};

  private static fromData = (data: LandData) => {
    const model = LandModel.modelMap[data.blockId];
    if (model) return model;

    const newModel = new LandModel(data.version, data.beta, data.blockId, data.tags, data.fertility, data.state);
    LandModel.modelMap[data.blockId] = newModel;
    return newModel;
  };

  /** 通过方块 id 获取缓存的土地实例 */
  static getById = (blockId: LandId) => {
    const data = LAND_DATA.find((land) => land.blockId === blockId);
    if (!data) {
      throw new Error(`Land data not found for blockId: ${blockId}`);
    }
    return LandModel.fromData(data);
  };

  /** 通过过滤器获取土地对象 */
  static getByFilter = (filter: LandFilter) => {
    const { tags, fertility, tickCount } = filter;
    return LAND_DATA.reduce((acc, land) => {
      const mergedTags = tags instanceof Array ? tags : [tags];
      if (!hasIntersection(mergedTags, land.tags)) return acc;
      if (fertility && !between(land.fertility, fertility)) return acc;
      if (tickCount && land.tickCount && !between(land.tickCount, tickCount)) return acc;
      return [...acc, LandModel.fromData(land)];
    }, [] as LandModel[]);
  };

  /** 获取所有土地对象 */
  static getAll = () => LAND_DATA.map((land) => LandModel.fromData(land));
}
