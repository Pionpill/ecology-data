/** 命名空间 ID，格式为 namespace:name */
export type Identifier = string;

export type VersionData = {
    /** 是否在测试版中出现, 默认 true */
    beta?: boolean,
    /** 上线版本 */
    version?: string,
}

/** 作物掉落信息 */
export type LootInfo = {
    /** 掉落物品 */
    item: Identifier,
    /** 掉落概率 */
    chance: number,
    /** 掉落数量，可以是小数 */
    count: number,
}