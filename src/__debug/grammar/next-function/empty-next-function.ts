import { INextFunction } from './next-function.type';

export function emptyNextFunction<GValue>(): INextFunction<GValue> {
  return (): GValue | null => {
    return null;
  };
}

export const EMPTY_NEXT_FUNCTION = emptyNextFunction<any>();
