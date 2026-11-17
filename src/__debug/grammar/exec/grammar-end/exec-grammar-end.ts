import { INextFunction } from '../../next-function/next-function.type';
import { onceNextFunction } from '../../next-function/once-next-function';

import { IExecResultEnd } from './exec-result-end.type';

export function execGrammarEnd(
  buffer: Uint8Array,
  index: number,
): INextFunction<IExecResultEnd> {
  return onceNextFunction((): IExecResultEnd | null => {
    if (index === buffer.length) {
      return {
        __type__: 'end',
        start: index,
        end: index,
      };
    } else {
      return null;
    }
  });
}
