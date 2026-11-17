import { IExecResultShared } from '../__shared__/exec-result-shared.type';

import { IExecResultExpression } from '../grammar-expression/exec-result-expression.type';

export interface IExecResultConcat extends IExecResultShared<'concat'> {
  readonly children: readonly IExecResultExpression[];
}
