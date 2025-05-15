import type { Identifier, LootInfo, VersionData } from "../_common/type";
import type { LandTag } from "../land";

/** 作物适宜信息 */
export type PlantSuitInfo = {
  /** 适宜范围 */
  suit: [number, number];
  /** 可生长范围 */
  can: [number, number];
  /** 计算模式: 直线方程或者对数方程，默认使用对数方程 */
  mode?: "straight" | "log";
  /** 生长范围外处理方案: 停止生长或者直接死亡，默认停止生长 */
  outMode?: "stop" | "die" | "fallback";
};

/** 作物肥沃度信息 */
export type PlantFertilityInfo = {
  /** 最低肥沃度需求 */
  min: number;
  /** 肥沃度敏感度 */
  sensitivity: number;
  /** 土壤类型: 泥土、沙子、石头，默认泥土 也可填入方块 id */
  landTag: Array<LandTag | Identifier>;
};

/** 下雨信息 */
export type PlantRainInfo = {
  /** 下雨生长倍率 */
  multiply: number;
};

export type HarvestTool = "hand" | Identifier;

/** 作物收获(包含掉落)信息 */
export type PlantHarvestData = {
  /** 收获后转换的方块 */
  convertBlock: Identifier | number | null;
  /** 收获时使用的工具 */
  tool?: HarvestTool | HarvestTool[];
  /** 可收获次数 */
  count?: number;
};

/** 作物生长信息 */
export type PlantGrowData<T extends PlantSuitInfo = PlantSuitInfo> = {
  /** 温度影响信息 */
  temperature: T;
  /** 降雨影响信息 */
  rainfall: T;
  /** 光照影响信息 */
  brightness: T;
  /** 肥沃度信息 */
  fertility: PlantFertilityInfo;
  /** 下雨信息 */
  rainInfo?: PlantRainInfo;
  /** 不下雨信息 */
  unRainInfo?: PlantRainInfo;
  /** 允许生长的时刻 */
  period?: "sun" | "moon" | "all";
  /** 是否仅能在室外生长，默认 true */
  outDoor?: boolean;
} & FungiGrowData;

/** 菌类生长信息 */
export type FungiGrowData = {
  /** 每 tick 传播概率 */
  spreadChange?: number;
};

/** 作物掉落物类型 */
export type PlantLootTag = "fruit" | "byproduct" | "seed";

/** 作物掉落物数据 */
export type PlantLootData = LootInfo & { tag?: PlantLootTag | Array<PlantLootTag> };

/** 作物生长阶段 */
export type PlantStageState = "seed" | "grow" | "flower" | "fruit" | "dead";

/** 作物生长信息 */
export type PlantStageData = {
  /** 状态 */
  state: PlantStageState;
  /** 生长所需要的时间（tick 数） */
  tick?: number;
  /** 作物高度，默认除以 32 */
  height: number | [number, number];
  /** 作物生长信息 */
  grow?: Partial<PlantGrowData>;
  /** 作物收获信息 */
  harvest?: PlantHarvestData;
  /** 作物掉落信息 */
  loots?: PlantLootData | Array<PlantLootData> | null;
};

/** 作物类型：主粮，菌类，香料，水果，蔬菜 */
export type PlantType = "grain" | "fungi" | "spice" | "fruit" | "vegetable";

/** 作物信息 */
export type PlantData = {
  /** 种子全名 */
  seedId: Identifier;
  /** 作物方块的前缀，不填使用 seed */
  blockPrefix?: Identifier;
  /** 作物类型 */
  type: PlantType;
  /** 生长默认信息 */
  defaultGrowInfo: PlantGrowData;
  /** 生长阶段信息 */
  stageInfo: Array<PlantStageData>;
} & VersionData;
