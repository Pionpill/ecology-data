import type { VersionData } from "../_common/type";
import type { LAND_ID, LAND_TAG } from "./data";

export type LandTag = (typeof LAND_TAG)[number];

export type LandId = (typeof LAND_ID)[number];

/** 土地状态数据 */
export type LandStateData = {
  fertility: number;
  attribute: string;
  value: number;
};

export type LandData = {
  /** 土地方块 id */
  blockId: LandId;
  /** 土地类型 */
  tags: LandTag[];
  /** 肥沃度 */
  fertility: number;
  /** 可供生长的 tick 总数(菌类会腐蚀木头) */
  tickCount?: number;
  /** 状态：例如湿润的土地 */
  state?: LandStateData | LandStateData[];
} & VersionData;

export type LandFilter = {
  tags?: LandTag | LandTag[];
  fertility?: [number, number];
  tickCount?: [number, number];
};
