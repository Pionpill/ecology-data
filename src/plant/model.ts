import { VersionModel } from "../_common/model";
import type { Identifier } from "../_common/type";
import { between, getIntersection, hasIntersection, hasIntersectionRange } from "../_common/utils";
import { PLANT_DATA } from "./data";
import type {
  PlantData,
  PlantFertilityInfo,
  PlantFilter,
  PlantGrowData,
  PlantLootTag,
  PlantStageData,
  PlantStageInfo,
  PlantSuitInfo,
  PlantType,
} from "./type";
import { getPlantPrefixFromBlockId } from "./utils";

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
      [0, 100] as [number, number]
    ),
    suit: stageInfo.reduce(
      (acc, cur) => {
        const curRange = cur.grow[key].can;
        if (curRange[0] > acc[0]) acc[0] = curRange[0];
        if (curRange[1] < acc[1]) acc[1] = curRange[1];
        return acc;
      },
      [0, 100] as [number, number]
    ),
  };
};

export default class PlantModel extends VersionModel {
  public readonly seedId: Identifier;
  public readonly blockPrefix: Identifier;
  public readonly type: PlantType;
  private readonly defaultGrowInfo: Required<PlantGrowData<Required<PlantSuitInfo>>>;
  private readonly stageInfo: Array<PlantStageInfo>;

  private constructor(
    version: string | undefined,
    beta: boolean | undefined,
    seedId: Identifier,
    blockPrefix: Identifier | undefined,
    type: PlantType,
    defaultGrowInfo: PlantGrowData,
    stageInfo: Array<PlantStageData>
  ) {
    super(version, beta);
    this.seedId = seedId;
    this.blockPrefix = blockPrefix ?? seedId;
    this.type = type;
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
            : loots
              ? this.blockPrefix + `_stage_0`
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

  /** 生长到成熟所需要的最短时间 */
  get matureDay() {
    return this.stageInfo.reduce((acc, cur) => {
      const periodTick = cur.grow.period === "all" ? 24 : 14;
      const tick = cur.tick;
      return acc + tick / periodTick;
    }, 0);
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
    return this.getAllStageInfo().reduce((acc, cur) => {
      const { sensitivity, min, landTag } = cur.grow.fertility;
      return {
        sensitivity: acc.sensitivity > sensitivity ? acc.sensitivity : sensitivity,
        min: acc.min > min ? acc.min : min,
        landTag: getIntersection(acc.landTag, landTag),
      };
    }, {} as PlantFertilityInfo);
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

  private static modelMap: Record<Identifier, PlantModel> = {};

  private static fromData = (data: PlantData) => {
    const model = PlantModel.modelMap[data.seedId];
    if (model) return model;

    const newModel = new PlantModel(
      data.version,
      data.beta,
      data.seedId,
      data.blockPrefix,
      data.type,
      data.defaultGrowInfo,
      data.stageInfo
    );
    PlantModel.modelMap[data.seedId] = newModel;
    return newModel;
  };

  /** 通过种子 id 获取缓存的作物实例 */
  static getBySeedId = (seedId: Identifier) => {
    const data = PLANT_DATA.find((plant) => plant.seedId === seedId);
    if (!data) {
      throw new Error(`Plant data not found for seedId: ${seedId}`);
    }
    return PlantModel.fromData(data);
  };

  /** 通过作物实体 id 获取缓存的作物实例 */
  static getByBlockId = (blockId: Identifier) => {
    const blockPrefix = getPlantPrefixFromBlockId(blockId);
    const data = PLANT_DATA.find((plant) => plant.blockPrefix === blockPrefix);
    if (!data) {
      throw new Error(`Plant data not found for blockPrefix: ${blockPrefix}`);
    }
    return PlantModel.fromData(data);
  };

  /** 获取所有作物对象 */
  static getAll = () => PLANT_DATA.map((plant) => PlantModel.fromData(plant));

  /** 通过过滤器获取作物对象 */
  static getByFilter = (filter: PlantFilter) =>
    PLANT_DATA.reduce((acc, cur) => {
      const plantModel = PlantModel.fromData(cur);
      if (filter.type && plantModel.type !== filter.type) return acc;
      if (filter.temperature) {
        const plantTemperatureRange = plantModel.temperatureRange;
        const { can, suit } = filter.temperature;
        if (can && !hasIntersectionRange(can, plantTemperatureRange.can, false)) return acc;
        if (suit && !hasIntersectionRange(suit, plantTemperatureRange.suit, false)) return acc;
      }
      if (filter.rainfall) {
        const plantRainfallRange = plantModel.rainfallRange;
        const { can, suit } = filter.rainfall;
        if (can && !hasIntersectionRange(can, plantRainfallRange.can, false)) return acc;
        if (suit && !hasIntersectionRange(suit, plantRainfallRange.suit, false)) return acc;
      }
      if (filter.brightness) {
        const plantBrightnessRange = plantModel.brightnessRange;
        const { can, suit } = filter.brightness;
        if (can && !hasIntersectionRange(can, plantBrightnessRange.can, false)) return acc;
        if (suit && !hasIntersectionRange(suit, plantBrightnessRange.suit, false)) return acc;
      }
      if (filter.fertility) {
        const { min, sensitivity, landTag } = filter.fertility;
        if (min && !between(plantModel.fertilityInfo.min, min)) return acc;
        if (sensitivity && !between(plantModel.fertilityInfo.sensitivity, sensitivity)) return acc;
        if (landTag && !hasIntersection(landTag, plantModel.fertilityInfo.landTag)) return acc;
      }
      if (filter.period && filter.period !== plantModel.defaultGrowInfo.period) return acc;
      if (filter.outDoor && filter.outDoor !== plantModel.defaultGrowInfo.outDoor) return acc;
      if (
        filter.lootItems &&
        !hasIntersection(
          filter.lootItems,
          plantModel.lootItems.map((item) => item.itemId)
        )
      ) {
        return acc;
      }
      if (filter.allTicks && !between(plantModel.allTicks, filter.allTicks)) return acc;
      if (filter.matureDay && !between(plantModel.matureDay, filter.matureDay)) return acc;
      if (filter.maxHeight) {
        const plantHeight = plantModel.stageInfo[plantModel.stageInfo.length - 1].height;
        const plantRealHeight = plantHeight[0] / plantHeight[1];
        if (!between(plantRealHeight, filter.maxHeight)) return acc;
      }
      if (filter.harvestCount) {
        const plantHarvestCount = plantModel.stageInfo[plantModel.stageInfo.length - 1].harvest.count;
        if (!between(plantHarvestCount, filter.harvestCount)) {
          return acc;
        }
      }
      acc.push(plantModel);
      return acc;
    }, [] as PlantModel[]);
}
