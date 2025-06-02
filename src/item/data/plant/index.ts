import RICE_ITEM from "../material/hulled/rice";
import STRAWBERRY_ITEM from "./fruit/strawberry";
import SUGARCANE_ITEM from "./fruit/sugarcane";
import BUTTON_MUSHROOM_ITEM from "./fungi/button_mushroom";
import DICTYOPHORA_ITEM from "./fungi/dictyophora";
import ENOKI_ITEM from "./fungi/enoki";
import LENTINULA_ITEM from "./fungi/lentinula";
import MATSUTAKE_ITEM from "./fungi/matsutake";
import WOOD_EAR_ITEM from "./fungi/wood_ear";
import CORN_ITEM from "./grain/corn";
import GREEN_BEAN_ITEM from "./grain/green_bean";
import PEANUT_ITEM from "./grain/peanut";
import POTATO_ITEM from "./grain/potato";
import RED_BEAN_ITEM from "./grain/red_bean";
import RICE_SEEDS_ITEM from "./grain/rice_seeds";
import SORGHUM_ITEM from "./grain/sorghum";
import SOY_BEAN_ITEM from "./grain/soy_bean";
import SWEET_POTATO_ITEM from "./grain/sweet_potato";
import TARO_ITEM from "./grain/taro";
import WHEAT_PLANT_ITEM from "./grain/wheat_plant";
import WHEAT_SEEDS_ITEM from "./grain/wheat_seeds";
import YAM_ITEM from "./grain/yam";
import CHILI_ITEM from "./spice/chili";
import GARLIC_ITEM from "./spice/garlic";
import GINGER_ITEM from "./spice/ginger";
import HERB_ITEM from "./spice/herb";
import HERB_SEEDS_ITEM from "./spice/herb_seeds";
import SCALLION_ITEM from "./spice/scallion";
import SCALLION_SEEDS_ITEM from "./spice/scallion_seeds";
import BEET_LEAF_ITEM from "./vegetable/beet_leaf";
import BEET_ROOT_ITEM from "./vegetable/beet_root";
import BOK_CHOY_ITEM from "./vegetable/bok_choy";
import BOK_CHOY_SEEDS_ITEM from "./vegetable/bok_choy_seeds";
import BROCCOLI_ITEM from "./vegetable/broccoli";
import CABBAGE_ITEM from "./vegetable/cabbage";
import CABBAGE_SEEDS_ITEM from "./vegetable/cabbage_seeds";
import CANOLA_ITEM from "./vegetable/canola";
import CARROT_ITEM from "./vegetable/carrot";
import CELERY_ITEM from "./vegetable/celery";
import CELERY_SEEDS_ITEM from "./vegetable/celery_seeds";
import EGGPLANT_ITEM from "./vegetable/eggplant";
import LEEK_ITEM from "./vegetable/leek";
import LEEK_SEEDS_ITEM from "./vegetable/leek_seeds";
import LETTUCE_ITEM from "./vegetable/lettuce";
import LETTUCE_SEEDS_ITEM from "./vegetable/lettuce_seeds";
import ONION_ITEM from "./vegetable/onion";
import PEA_ITEM from "./vegetable/pea";
import PEPPER_ITEM from "./vegetable/pepper";
import SPINACH_ITEM from "./vegetable/spinach";
import SPINACH_SEEDS_ITEM from "./vegetable/spinach_seeds";
import TOMATO_ITEM from "./vegetable/tomato";
import WHITE_BROCCOLI_ITEM from "./vegetable/white_broccoli";
import WHITE_BROCCOLI_SEEDS_ITEM from "./vegetable/white_broccoli_seeds";
import WHITE_CABBAGE_ITEM from "./vegetable/white_cabbage";
import WHITE_CABBAGE_SEEDS_ITEM from "./vegetable/white_cabbage_seeds";
import WHITE_CARROT_ITEM from "./vegetable/white_carrot";

const FRUIT_DATA = [STRAWBERRY_ITEM, SUGARCANE_ITEM];

const FUNGI_DATA = [BUTTON_MUSHROOM_ITEM, DICTYOPHORA_ITEM, ENOKI_ITEM, LENTINULA_ITEM, MATSUTAKE_ITEM, WOOD_EAR_ITEM];

const GRAIN_DATA = [
  CORN_ITEM,
  GREEN_BEAN_ITEM,
  PEANUT_ITEM,
  POTATO_ITEM,
  RED_BEAN_ITEM,
  RICE_ITEM,
  RICE_SEEDS_ITEM,
  SORGHUM_ITEM,
  SOY_BEAN_ITEM,
  SWEET_POTATO_ITEM,
  TARO_ITEM,
  WHEAT_PLANT_ITEM,
  WHEAT_SEEDS_ITEM,
  YAM_ITEM,
];

const SPICE_DATA = [
  CHILI_ITEM,
  GARLIC_ITEM,
  GINGER_ITEM,
  HERB_SEEDS_ITEM,
  HERB_ITEM,
  SCALLION_SEEDS_ITEM,
  SCALLION_ITEM,
];

const VEGETABLE_DATA = [
  BEET_LEAF_ITEM,
  BEET_ROOT_ITEM,
  BOK_CHOY_ITEM,
  BOK_CHOY_SEEDS_ITEM,
  BROCCOLI_ITEM,
  CABBAGE_SEEDS_ITEM,
  CABBAGE_ITEM,
  CANOLA_ITEM,
  CARROT_ITEM,
  CELERY_ITEM,
  CELERY_SEEDS_ITEM,
  EGGPLANT_ITEM,
  LEEK_ITEM,
  LEEK_SEEDS_ITEM,
  LETTUCE_ITEM,
  LETTUCE_SEEDS_ITEM,
  ONION_ITEM,
  PEA_ITEM,
  PEPPER_ITEM,
  SPINACH_ITEM,
  SPINACH_SEEDS_ITEM,
  TOMATO_ITEM,
  WHITE_BROCCOLI_ITEM,
  WHITE_BROCCOLI_SEEDS_ITEM,
  WHITE_CABBAGE_ITEM,
  WHITE_CABBAGE_SEEDS_ITEM,
  WHITE_CARROT_ITEM,
];

export const PLANT_ITEM_DATA = [...FRUIT_DATA, ...FUNGI_DATA, ...GRAIN_DATA, ...SPICE_DATA, ...VEGETABLE_DATA];
