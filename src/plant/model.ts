import { VersionModel } from "../_common/model";
import type { Identifier, LootInfo } from "../_common/type";
import Plant_DATA from "./data";
import type {
  PlantData,
  PlantGrowData,
  PlantStageData,
  PlantSuitInfo,
  HarvestTool,
  PlantStageState,
  PlantLootTag,
} from "./type";

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

const formatPlantSuitInfo = (suitInfo: PlantSuitInfo | undefined, defaultSuitInfo?: PlantSuitInfo) => {
  return {
    ...defaultSuitInfo,
    ...suitInfo,
    mode: suitInfo?.mode ?? defaultSuitInfo?.mode ?? "log",
    outMode: suitInfo?.outMode ?? defaultSuitInfo?.outMode ?? "stop",
  } as Required<PlantSuitInfo>;
};

const getAllStageRange = (stageInfo: Array<PlantStageInfo>, key: "temperature" | "rainfall" | "brightness") => {
  return {
    can: stageInfo.reduce(
      (acc, cur) => {
        const curRange = cur.grow[key].can;
        if (curRange[0] > acc[0]) acc[0] = curRange[0];
        if (curRange[1] < acc[1]) acc[1] = curRange[1];
        return acc;
      },
      [0, 100]
    ),
    suit: stageInfo.reduce(
      (acc, cur) => {
        const curRange = cur.grow[key].can;
        if (curRange[0] > acc[0]) acc[0] = curRange[0];
        if (curRange[1] < acc[1]) acc[1] = curRange[1];
        return acc;
      },
      [0, 100]
    ),
  };
};

export default class PlantModel extends VersionModel {
  public readonly seedId: Identifier;
  public readonly blockPrefix: Identifier;
  private readonly defaultGrowInfo: Required<PlantGrowData<Required<PlantSuitInfo>>>;
  private readonly stageInfo: Array<PlantStageInfo>;

  private constructor(
    version: string | undefined,
    beta: boolean | undefined,
    seedId: Identifier,
    blockPrefix: Identifier | undefined,
    defaultGrowInfo: PlantGrowData,
    stageInfo: Array<PlantStageData>
  ) {
    super(version, beta);
    this.seedId = seedId;
    this.blockPrefix = blockPrefix ?? seedId;
    this.defaultGrowInfo = {
      ...defaultGrowInfo,
      period: defaultGrowInfo.period ?? "sun",
      outDoor: defaultGrowInfo.outDoor ?? true,
      unRainInfo: defaultGrowInfo.unRainInfo ?? {
        multiply: 1,
      },
      rainInfo: defaultGrowInfo.rainInfo ?? {
        multiply: 1,
      },
      temperature: formatPlantSuitInfo(defaultGrowInfo.temperature),
      rainfall: formatPlantSuitInfo(defaultGrowInfo.rainfall),
      brightness: formatPlantSuitInfo(defaultGrowInfo.brightness),
      spreadChange: defaultGrowInfo.spreadChange ?? 0,
    };
    this.stageInfo = stageInfo.map((stage, index) => {
      const { grow, harvest, loots, ...res } = stage;

      return {
        ...res,
        tick: stage.tick ?? -1,
        blockId: this.blockPrefix + `_stage_` + index,
        grow: grow
          ? {
              ...this.defaultGrowInfo,
              ...grow,
              temperature: formatPlantSuitInfo(grow.temperature, this.defaultGrowInfo.temperature),
              rainfall: formatPlantSuitInfo(grow.rainfall, this.defaultGrowInfo.rainfall),
              brightness: formatPlantSuitInfo(grow.brightness, this.defaultGrowInfo.brightness),
              fertility: { ...this.defaultGrowInfo.fertility, ...grow.fertility },
            }
          : this.defaultGrowInfo,
        height: Array.isArray(stage.height) ? stage.height : ([stage.height, 32] as [number, number]),
        harvest: {
          convertBlock: harvest
            ? harvest.convertBlock
              ? typeof harvest.convertBlock === "string"
                ? harvest.convertBlock
                : this.blockPrefix + `_stage_` + harvest.convertBlock
              : null
            : null,
          count: harvest?.count ?? 1,
          tool: harvest?.tool ? (typeof harvest.tool === "string" ? [harvest.tool] : harvest.tool) : ["hand"],
        },
        loots: loots
          ? (Array.isArray(loots) ? loots : [loots]).map((loot) => ({
              ...loot,
              tag: loot.tag ? (Array.isArray(loot.tag) ? loot.tag : [loot.tag]) : (["fruit", "seed"] as PlantLootTag[]),
            }))
          : [],
      };
    });
  }

  /** 生长阶段数量 */
  get stageCount() {
    return this.stageInfo.length;
  }

  /** 获取所有掉落物数据 */
  get lootItems() {
    const allStageInfo = this.getAllStageInfo();
    return allStageInfo.flatMap((stage) => stage.loots);
  }

  /** 获取所有生长阶段所需时间(tick) */
  get allTicks() {
    return this.getAllStageInfo().reduce((acc, stage) => acc + stage.tick, 0);
  }

  /** 获取所有生长阶段温度范围（各个阶段总计） */
  get temperatureRange() {
    return getAllStageRange(this.getAllStageInfo(), "temperature");
  }

  /** 获取所有生长阶段降水范围（各个阶段总计） */
  get rainfallRange() {
    return getAllStageRange(this.getAllStageInfo(), "rainfall");
  }

  /** 获取所有生长阶段光照范围（各个阶段总计） */
  get brightnessRange() {
    return getAllStageRange(this.getAllStageInfo(), "brightness");
  }

  /** 获取所有生长阶段肥沃度范围（各个阶段总计） */
  get fertilityInfo() {
    return this.getAllStageInfo().reduce(
      (acc, cur) => (acc > cur.grow.fertility.sensitivity ? acc : cur.grow.fertility.sensitivity),
      0
    );
  }

  /** 获取生长阶段信息 */
  getStageInfo(stage: number) {
    if (stage < 0 || stage >= this.stageCount) {
      throw new Error(`Stage ${stage} is out of range`);
    }
    return this.stageInfo[stage];
  }

  /** 获取所有生长阶段信息 */
  getAllStageInfo() {
    return this.stageInfo.map((_, index) => this.getStageInfo(index));
  }

  private static seedIdModelMap: Record<Identifier, PlantModel> = {};
  private static blockPrefixModelMap: Record<Identifier, PlantModel> = {};

  private static fromDate = (data: PlantData) => {
    return new PlantModel(data.version, data.beta, data.seedId, data.blockPrefix, data.defaultGrowInfo, data.stageInfo);
  };

  /** 通过种子 id 获取缓存的作物实例 */
  static fromSeedId = (seedId: Identifier, refresh: boolean = false) => {
    if (!refresh) {
      const model = this.seedIdModelMap[seedId];
      if (model) return model;
    }

    const data = Plant_DATA.find((plant) => plant.seedId === seedId);
    if (!data) {
      throw new Error(`Plant data not found for seedId: ${seedId}`);
    }
    const model = this.fromDate(data);
    this.seedIdModelMap[seedId] = model;
    this.blockPrefixModelMap[model.blockPrefix] = model;
    return model;
  };

  /** 通过作物实体 id 获取缓存的作物实例 */
  static fromBlockId = (blockId: Identifier, refresh: boolean = false) => {
    const blockIdArray = blockId.split("_");
    const stageIndex = blockIdArray.findIndex((item) => item === "stage");
    if (stageIndex === -1) {
      throw new Error(`Plant blockId is not valid: ${blockId}`);
    }
    const blockPrefix = blockIdArray.slice(0, stageIndex).join("");

    if (!refresh) {
      const model = this.blockPrefixModelMap[blockPrefix];
      if (model) return model;
    }

    const data = Plant_DATA.find((plant) => plant.blockPrefix === blockPrefix);
    if (!data) {
      throw new Error(`Plant data not found for blockPrefix: ${blockPrefix}`);
    }

    const model = this.fromDate(data);
    this.blockPrefixModelMap[blockPrefix] = model;
    this.seedIdModelMap[model.seedId] = model;
    return model;
  };
}
