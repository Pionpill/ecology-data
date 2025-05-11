import type { Identifier, VersionData } from "../_common/type"

/** 土地类型 TODO 移到土壤模块去 */
export type LandTag = "dirt" | "sand" | "stone" | "fungi" | "wood" | "water"

/** 土地状态数据 */
export type LandStateData = {
    fertility: number,
    attribute: string,
    value: number,
}

export type LandData = {
    /** 土地方块 id */
    blockId: Identifier,
    /** 土地类型 */
    tags: LandTag | LandTag[],
    /** 肥沃度 */
    fertility: number,
    /** 状态：例如湿润的土地 */
    state?: LandStateData | LandStateData[]
} & VersionData;

