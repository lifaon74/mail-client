import { IExecResultShared } from '../__shared__/exec-result-shared.type';

import { IExecResultExpression } from '../grammar-expression/exec-result-expression.type';

export interface IExecResultAlternative extends IExecResultShared<'alternative'> {
  readonly child: IExecResultExpression;
}
