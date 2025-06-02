import { type Quality } from "../_common/enum";
import { VersionModel } from "../_common/model";
import { between, hasIntersection } from "../_common/utils";
import { ITEM_DATA } from "./data";
import type { ItemData, ItemFilter, ItemId, ItemTag, NutritionInfo, VanillaFoodInfo, VanillaItemInfo } from "./type";

export default class ItemModel extends VersionModel {
  public readonly itemId: ItemId;
  public readonly quality: Quality;
  public readonly tags: ItemTag[];
  public readonly image: string | null;
  public readonly nutrition: NutritionInfo | null;
  public readonly food: VanillaFoodInfo | null;
  public readonly vanilla: Required<VanillaItemInfo>;

  private constructor(
    version: string | undefined,
    beta: boolean | undefined,
    itemId: ItemId,
    quality: Quality,
    tags: ItemTag[],
    food?: VanillaFoodInfo,
    nutrition?: NutritionInfo,
    image?: string,
    vanillaItemInfo?: VanillaItemInfo
  ) {
    super(version, beta);
    this.itemId = itemId;
    this.quality = quality;
    this.tags = tags;
    this.food = food ?? null;
    this.image = image ?? null;
    this.vanilla = {
      maxStackSize: vanillaItemInfo?.maxStackSize ?? 64,
    };
    this.nutrition = nutrition ?? null;
  }

  private static modelMap: Partial<Record<ItemId, ItemModel>> = {};

  private static fromData = (data: ItemData) => {
    const model = ItemModel.modelMap[data.itemId];
    if (model) return model;

    const newModel = new ItemModel(
      data.version,
      data.beta,
      data.itemId,
      data.quality,
      data.tags,
      data.food,
      data.nutrition,
      data.image,
      data.vanilla
    );
    ItemModel.modelMap[data.itemId] = newModel;
    return newModel;
  };

  /** 通过物品 id 获取缓存的物品实例 */
  static getById = (itemId: ItemId) => {
    const data = ITEM_DATA.find((item) => item.itemId === itemId);
    if (!data) {
      throw new Error(`Item data not found for itemId: ${itemId}`);
    }
    return ItemModel.fromData(data);
  };

  /** 获取所有物品对象 */
  static getAll = () => ITEM_DATA.map((item) => ItemModel.fromData(item));

  /** 通过过滤器获取物品对象 */
  static getByFilter = (filter: ItemFilter) => {
    const { quality, tags, food } = filter;

    return ITEM_DATA.reduce((acc, cur) => {
      const itemModel = ItemModel.fromData(cur);
      if (quality && !quality?.includes(itemModel.quality)) return acc;
      if (tags && !hasIntersection(tags, itemModel.tags)) return acc;
      if (food) {
        if (food.nutrition && itemModel.food?.nutrition && !between(itemModel.food?.nutrition, food.nutrition))
          return acc;
        if (
          food.effectIds &&
          itemModel.food?.effects &&
          !hasIntersection(
            food.effectIds,
            itemModel.food?.effects.map((effect) => effect.name)
          )
        )
          return acc;
      }
      acc.push(itemModel);
      return acc;
    }, [] as ItemModel[]);
  };
}
