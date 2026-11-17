import { IExecResultShared } from '../__shared__/exec-result-shared.type';

import { IExecResultExpression } from '../grammar-expression/exec-result-expression.type';

export interface IExecResultRepeat extends IExecResultShared<'repeat'> {
  readonly children: readonly IExecResultExpression[];
}
