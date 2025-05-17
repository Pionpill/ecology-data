/** 判断某个值是否在指定范围内 */
export const between = (value: number, range: [number, number], include = true) => {
  const [min, max] = range;
  return include ? value >= min && value <= max : value > min && value < max;
};

/** 判断两个数组是否有交集 */
export const hasIntersection = <T = string>(arr1: Array<T>, arr2: Array<T>) => {
  const set = new Set<T>(arr1);
  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) return true;
  }
  return false;
};
