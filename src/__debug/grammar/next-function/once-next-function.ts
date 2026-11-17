import { INextFunction } from './next-function.type';
import { EMPTY_NEXT_FUNCTION } from './empty-next-function';

export function onceNextFunction<GValue>(
  next: INextFunction<GValue>,
): INextFunction<GValue> {
  return (): GValue | null => {
    if (next === EMPTY_NEXT_FUNCTION) {
      return null;
    } else {
      const value: GValue | null = next();
      next = EMPTY_NEXT_FUNCTION;
      return value;
    }
  };
}
