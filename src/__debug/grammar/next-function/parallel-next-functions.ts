import { INextFunction } from './next-function.type';
import { switchMapNextFunction } from './switch-map-next-function';
import { singleValueNextFunction } from './single-value-next-function';

/**
 * @deprecated
 */
export function parallelNextFunctions<GValue>(
  nextFunctions: readonly INextFunction<GValue>[],
  index: number = 0,
  values: readonly GValue[] = [],
): INextFunction<readonly GValue[]> {
  if (index < nextFunctions.length) {
    return switchMapNextFunction(
      nextFunctions[index],
      (
        value: GValue,
      ): INextFunction<readonly GValue[]> => {
        return parallelNextFunctions(
          nextFunctions,
          index + 1,
          [
            ...values,
            value,
          ],
        );
      },
    );
  } else {
    return singleValueNextFunction(values);
  }
}
