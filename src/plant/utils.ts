import type { Identifier } from "../_common/type";

/** 通过方块 id 获取作物前缀 */
export const getPlantPrefixFromBlockId = (blockId: Identifier) => {
  const blockIdArray = blockId.split("_");
  const stageIndex = blockIdArray.findIndex((item) => item === "stage");
  if (stageIndex === -1) {
    throw new Error(`Plant blockId is not valid: ${blockId}`);
  }
  return blockIdArray.slice(0, stageIndex).join("");
};
