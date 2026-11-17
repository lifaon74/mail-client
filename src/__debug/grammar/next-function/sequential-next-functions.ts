import { INextFunction } from './next-function.type';

/**
 * deprecated
 * @param nextFunctions
 */
export function sequentialNextFunctions<GValue>(
  nextFunctions: readonly INextFunction<GValue>[],
): INextFunction<GValue> {
  const length: number = nextFunctions.length;
  let index: number = 0;
  return (): GValue | null => {
    while (index < length) {
      const result: GValue | null = nextFunctions[index]();
      if (result === null) {
        index++;
      } else {
        return result;
      }
    }
    return null;
  };
}
