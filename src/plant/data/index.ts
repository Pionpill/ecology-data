import type { PlantData } from "../type";
import STRAWBERRY_PLANT from "./fruit/strawberry";
import SUGARCANE_PLANT from "./fruit/sugarcane";
import BUTTON_MUSHROOM_PLANT from "./fungi/button_mushroom";
import DICTYOPHORA_PLANT from "./fungi/dictyophora";
import ENOKI_PLANT from "./fungi/enoki";
import LENTINULA_PLANT from "./fungi/lentinula";
import MATSUTAKE_PLANT from "./fungi/matsutake";
import WOOD_EAR_PLANT from "./fungi/wood_ear";
import CANOLA_PLANT from "./vegetable/canola";
import CORN_PLANT from "./grain/corn";
import GREEN_BEAN_PLANT from "./grain/green_bean";
import PEANUT_PLANT from "./grain/peanut";
import POTATO_PLANT from "./grain/potato";
import RED_BEAN_PLANT from "./grain/red_bean";
import RICE_PLANT from "./grain/rice";
import SORGHUM_PLANT from "./grain/sorghum";
import SOY_BEAN_PLANT from "./grain/soy_bean";
import SWEET_POTATO_PLANT from "./grain/sweet_potate";
import TARO_PLANT from "./grain/taro";
import WHEAT_PLANT from "./grain/wheat";
import YAM_PLANT from "./grain/yam";
import WEED_PLANT from "./grass/weed";
import WEED_TALL_PLANT from "./grass/weed_tall";
import CELERY_PLANT from "./spice/celery";
import CHILI_PLANT from "./spice/chili";
import GINGER_PLANT from "./spice/ginger";
import HERB_PLANT from "./spice/herb";
import BEET_PLANT from "./vegetable/beet";
import BOK_CHOY_PLANT from "./vegetable/bok_choy";
import CABBAGE_PLANT from "./vegetable/cabbage";
import CARROT_PLANT from "./vegetable/carrot";
import EGGPLANT_PLANT from "./vegetable/eggplant";
import GARLIC_PLANT from "./vegetable/garlic";
import LEEK_PLANT from "./vegetable/leek";
import LETTUCE_PLANT from "./vegetable/lettuce";
import ONION_PLANT from "./vegetable/onion";
import PEA_PLANT from "./vegetable/pea";
import PEPPER_PLANT from "./vegetable/pepper";
import SCALLION_PLANT from "./vegetable/scallion";
import SPINACH_PLANT from "./vegetable/spinach";
import TOMATO_PLANT from "./vegetable/tomato";
import WHITE_BROCCOLI_PLANT from "./vegetable/white_broccoli";
import WHITE_CABBAGE_PLANT from "./vegetable/white_cabbage";
import WHITE_CARROT_PLANT from "./vegetable/white_carrot";

export const PLANT_DATA: Array<PlantData> = [
  STRAWBERRY_PLANT,
  SUGARCANE_PLANT,
  BEET_PLANT,
  BOK_CHOY_PLANT,
  WHITE_BROCCOLI_PLANT,
  CHILI_PLANT,
  BUTTON_MUSHROOM_PLANT,
  CABBAGE_PLANT,
  CELERY_PLANT,
  CORN_PLANT,
  DICTYOPHORA_PLANT,
  EGGPLANT_PLANT,
  ENOKI_PLANT,
  GARLIC_PLANT,
  GINGER_PLANT,
  GREEN_BEAN_PLANT,
  HERB_PLANT,
  LENTINULA_PLANT,
  LETTUCE_PLANT,
  MATSUTAKE_PLANT,
  ONION_PLANT,
  PEA_PLANT,
  PEANUT_PLANT,
  PEPPER_PLANT,
  POTATO_PLANT,
  CANOLA_PLANT,
  RED_BEAN_PLANT,
  RICE_PLANT,
  SCALLION_PLANT,
  SORGHUM_PLANT,
  SOY_BEAN_PLANT,
  SPINACH_PLANT,
  TARO_PLANT,
  TOMATO_PLANT,
  WEED_PLANT,
  WEED_TALL_PLANT,
  WHEAT_PLANT,
  WHITE_CABBAGE_PLANT,
  WHITE_CARROT_PLANT,
  WOOD_EAR_PLANT,
  YAM_PLANT,
  SWEET_POTATO_PLANT,
  CARROT_PLANT,
  LEEK_PLANT,
];

export const PLANT_LOOT_TAG_DATA = ["fruit", "byproduct", "seed"] as const;

export const PLANT_STAGE_STATE_DATA = ["seed", "grow", "flower", "mature", "dead"] as const;

export const PLANT_TYPE_DATA = ["grain", "fungi", "spice", "fruit", "vegetable", "grass"] as const;
