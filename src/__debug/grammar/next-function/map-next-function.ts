import { INextFunction } from './next-function.type';

export function mapNextFunction<GIn, GOut>(
  next: INextFunction<GIn>,
  map: (value: GIn) => GOut,
): INextFunction<GOut> {
  return (): GOut | null => {
    const result: GIn | null = next();
    return (result === null)
      ? null
      : map(result);
  };
}
