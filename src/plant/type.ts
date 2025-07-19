import type { Identifier, LootInfo, VersionData } from "../_common/type";
import type { MATERIAL_TYPE } from "../item/data";
import type { LandTag } from "../land";
import type { PLANT_LOOT_TAG_DATA, PLANT_STAGE_STATE_DATA, PLANT_TYPE_DATA } from "./data";

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
  /** 可收获次数, -1 为无限收获 */
  count?: number;
};

export type PlantGrowPeriod = "sun" | "moon" | "all";

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
  /** 允许生长的时刻，默认 sun */
  period?: PlantGrowPeriod;
  /** 是否仅能在室外生长，默认 true */
  outDoor?: boolean;
} & FungiGrowData;

/** 菌类生长信息 */
export type FungiGrowData = {
  /** 每 tick 传播概率 */
  spreadChange?: number;
};

/** 作物掉落物类型 */
export type PlantLootTag = (typeof PLANT_LOOT_TAG_DATA)[number];

/** 作物掉落物数据 */
export type PlantLootData = LootInfo & { tag?: PlantLootTag | Array<PlantLootTag> };

/** 作物生长阶段 */
export type PlantStageState = (typeof PLANT_STAGE_STATE_DATA)[number];

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
export type PlantType = (typeof PLANT_TYPE_DATA)[number];

/** 原材料分类 */
export type MaterialType = (typeof MATERIAL_TYPE)[number];

/** 作物信息 */
export type PlantData = {
  /** 种子全名 */
  seedId: Identifier;
  /** 作物方块的前缀，不填使用 seed */
  blockPrefix: Identifier;
  /** 作物类型 */
  type: PlantType;
  /** 生长默认信息 */
  defaultGrowInfo: PlantGrowData;
  /** 生长阶段信息 */
  stageInfo: Array<PlantStageData>;
} & VersionData;

/** 作物生长信息 */
export type PlantStageInfo = {
  /** 方块 id */
  blockId: string;
  /** 状态 */
  state: PlantStageState;
  /** 生长所需要的时间（tick 数） */
  tick: number;
  /** 作物高度，默认除以 32 */
  height: [number, number];
  /** 生长信息 */
  grow: Required<PlantGrowData<Required<PlantSuitInfo>>>;
  /** 收获信息 */
  harvest: {
    /** 收获后转换的方块 */
    convertBlock: Identifier | null;
    /** 收获时使用的工具 */
    tool?: HarvestTool[];
    /** 可收获次数 */
    count: number;
  };
  /** 掉落信息 */
  loots: Array<LootInfo & { tag: Array<PlantLootTag> }>;
};

export type PlantFilter = {
  /** 类型 */
  type?: PlantType;
  /** 温度范围 */
  temperature?: { suit?: [number, number]; can?: [number, number] };
  /** 降雨范围 */
  rainfall?: { suit?: [number, number]; can?: [number, number] };
  /** 光照范围 */
  brightness?: { suit?: [number, number]; can?: [number, number] };
  /** 土地肥沃度信息 */
  fertility?: {
    /** 最低肥沃度范围 */
    min?: [number, number];
    /** 肥沃度敏感度范围 */
    sensitivity?: [number, number];
    /** 土壤类型: 泥土、沙子、石头，默认泥土 也可填入方块 id */
    landTag: Array<LandTag | Identifier>;
  };
  /** 生长时刻 */
  period?: PlantGrowPeriod;
  /** 是否仅能在室外生长 */
  outDoor?: boolean;
  /** 掉落物 */
  lootItems?: string[];
  /** 总的生长时间 */
  allTicks?: [number, number];
  /** 生长到成熟需要的时间 */
  matureDay?: [number, number];
  /** 最大作物高度 */
  maxHeight?: [number, number];
  /** 可收获总数 */
  harvestCount?: [number, number];
};
