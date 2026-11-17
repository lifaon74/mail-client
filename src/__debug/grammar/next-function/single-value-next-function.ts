import { INextFunction } from './next-function.type';

export function singleValueNextFunction<GValue>(
  value: GValue,
): INextFunction<GValue> {
  let done: boolean = false;
  return (): GValue | null => {
    if (done) {
      return null;
    } else {
      done = true;
      return value;
    }
  };
}

