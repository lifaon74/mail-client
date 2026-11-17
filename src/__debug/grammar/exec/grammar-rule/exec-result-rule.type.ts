import { IExecResultShared } from '../__shared__/exec-result-shared.type';

import { IExecResultExpression } from '../grammar-expression/exec-result-expression.type';

export interface IExecResultRule extends IExecResultShared<'rule'> {
  readonly name: string;
  readonly child: IExecResultExpression;
}
