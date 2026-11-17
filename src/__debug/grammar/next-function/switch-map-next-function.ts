import { INextFunction } from './next-function.type';
import { EMPTY_NEXT_FUNCTION } from './empty-next-function';

export function switchMapNextFunction<GIn, GOut>(
  next: INextFunction<GIn>,
  map: (value: GIn) => INextFunction<GOut>,
): INextFunction<GOut> {
  let _next: INextFunction<GOut> | null = EMPTY_NEXT_FUNCTION;

  return (): GOut | null => {
    while (_next !== null) {
      const _result: GOut | null = _next();

      if (_result === null) {
        const result: GIn | null = next();
        _next = (result === null)
          ? null
          : map(result);
      } else {
        return _result;
      }
    }

    return null;
  };
}
