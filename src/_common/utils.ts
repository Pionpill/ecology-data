/** 判断某个值是否在指定范围内 */
export const between = (value: number, range: [number, number], include = true) => {
  const [min, max] = range;
  return include ? value >= min && value <= max : value > min && value < max;
};

/** 获取两个数组得交集 */
export const getIntersection = <T = string>(arr1: Array<T>, arr2: Array<T>) => {
  const set = new Set<T>(arr1);
  const result = [] as Array<T>;
  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) result.push(arr2[i]);
  }
  return result;
};

/** 判断两个数组是否有交集 */
export const hasIntersection = <T = string>(arr1: Array<T>, arr2: Array<T>) => {
  const set = new Set<T>(arr1);
  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) return true;
  }
  return false;
};

/** 判断两个范围是否有交集 */
export const hasIntersectionRange = (range1: [number, number], range2: [number, number], edge = true) => {
  const [min1, max1] = range1;
  const [min2, max2] = range2;
  return edge ? min1 <= max2 && max1 >= min2 : min1 < max2 && max1 > min2;
};
