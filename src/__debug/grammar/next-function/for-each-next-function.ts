import { INextFunction } from './next-function.type';

export function forEachNextFunction<GValue>(
  next: INextFunction<GValue>,
  callback: (value: GValue) => void,
): void {
  let value: GValue | null;
  while ((value = next()) !== null) {
    callback(value);
  }
}
