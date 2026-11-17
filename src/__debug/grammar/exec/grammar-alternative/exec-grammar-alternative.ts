import { IGrammarAlternativeAstNode } from '../../ast/grammar-alternative/grammar-alternative-ast-node.type';
import { IReadonlyGrammarRulesMap } from '../../ast/grammar/grammar-rules-map.type';
import { INextFunction } from '../../next-function/next-function.type';
import { IExecResultAlternative } from './exec-result-alternative.type';
import { IGrammarExpressionAstNode } from '../../ast/grammar-expression/grammar-expression-ast-node.type';
import { IExecResultExpression } from '../grammar-expression/exec-result-expression.type';
import { EMPTY_NEXT_FUNCTION } from '../../next-function/empty-next-function';

import { execGrammarExpression } from '../grammar-expression/exec-grammar-expression';

export function execGrammarAlternative(
  node: IGrammarAlternativeAstNode,
  rules: IReadonlyGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
): INextFunction<IExecResultAlternative> {
  const expressions: readonly IGrammarExpressionAstNode[] = node.expressions;
  const expressionsLength: number = expressions.length;
  let expressionIndex: number = 0;

  let _next: INextFunction<IExecResultExpression> | null = EMPTY_NEXT_FUNCTION;

  return (): IExecResultAlternative | null => {
    while (_next !== null) {
      const _result: IExecResultExpression | null = _next();

      if (_result === null) {
        _next = (expressionIndex < expressionsLength)
          ? execGrammarExpression(
            expressions[expressionIndex++],
            rules,
            buffer,
            index,
          )
          : null;
      } else {
        return {
          __type__: 'alternative',
          start: index,
          end: _result.end,
          child: _result,
        };
      }
    }

    return null;
  };

  // const expressions: readonly IGrammarExpressionAstNode[] = node.expressions;
  // const expressionsLength: number = expressions.length;
  // let expressionIndex: number = 0;
  // return switchMapNextFunction(
  //   (): INextFunction<IExecResult> | null => {
  //     return (expressionIndex < expressionsLength)
  //       ? execGrammarExpression(
  //         expressions[expressionIndex++],
  //         rules,
  //         buffer,
  //         index,
  //       )
  //       : null;
  //   },
  //   (next: INextFunction<IExecResult>): INextFunction<IExecResultAlternative> => {
  //     return mapNextFunction(next, (result: IExecResult): IExecResultAlternative => {
  //       return {
  //         __type__: 'alternative',
  //         start: index,
  //         end: result.end,
  //         child: result,
  //       };
  //     });
  //   },
  // );
}
