import { MATERIAL_ITEM_DATA } from "./material";
import { PLANT_ITEM_DATA } from "./plant";

/** 物品类型：种子，农产品，原材料，食物 */
export const ITEM_TYPE = ["seed", "plant", "material", "food"] as const;

/** 作物家族 */
export const PLANT_FAMILY = [
  "capsicum",
  "allium",
  "zingiber",
  "berry",
  "bean",
  "cereal",
  "tuber",
  "green",
  "solanum",
] as const;

/** 作物产物 */
export const PLANT_PRODUCT = ["sugar", "cookingOil"] as const;

/** 原材料分类 */
export const MATERIAL_TYPE = ["seasoning", "hulled"];

export const SATURATION_MODIFIER = ["poor", "low", "normal", "good", "max", "supernatural"] as const;

export const ITEM_ID = [
  "ham:chili",
  "ham:garlic",
  "ham:ginger",
  "ham:herb_seeds",
  "ham:herb",
  "ham:scallion_seeds",
  "ham:scallion",
  "ham:strawberry",
  "ham:sugarcane",
  "ham:corn",
  "ham:green_bean",
  "ham:peanut",
  "ham:potato",
  "ham:red_bean",
  "ham:rice_plant",
  "ham:rice_seeds",
  "ham:rice",
  "ham:sorghum",
  "ham:soy_bean",
  "ham:sweet_potato",
  "ham:taro",
  "ham:wheat_plant",
  "ham:wheat_seeds",
  "ham:yam",
  "ham:button_mushroom",
  "ham:dictyophora",
  "ham:enoki",
  "ham:lentinula",
  "ham:matsutake",
  "ham:wood_ear",
  "ham:beet_leaf",
  "ham:beet_root",
  "ham:bok_choy",
  "ham:bok_choy_seeds",
  "ham:broccoli",
  "ham:white_broccoli",
  "ham:white_broccoli_seeds",
  "ham:cabbage_seeds",
  "ham:cabbage",
  "ham:white_cabbage_seeds",
  "ham:celery_seeds",
  "ham:lettuce_seeds",
  "ham:carrot",
  "ham:white_carrot",
  "ham:white_cabbage",
  "ham:celery",
  "ham:eggplant",
  "ham:tomato",
  "ham:leek",
  "ham:leek_seeds",
  "ham:lettuce",
  "ham:onion",
  "ham:pea",
  "ham:pepper",
  "ham:canola",
  "ham:spinach",
  "ham:spinach_seeds",
  "ham:wheat",
] as const;

export const ITEM_DATA = [...PLANT_ITEM_DATA, ...MATERIAL_ITEM_DATA];
