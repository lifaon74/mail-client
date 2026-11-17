import { IGrammarConcatAstNode } from '../../ast/grammar-concat/grammar-concat-ast-node.type';
import { IReadonlyGrammarRulesMap } from '../../ast/grammar/grammar-rules-map.type';
import { INextFunction } from '../../next-function/next-function.type';
import { IExecResultConcat } from './exec-result-concat.type';
import { IGrammarExpressionAstNode } from '../../ast/grammar-expression/grammar-expression-ast-node.type';
import { IExecResultExpression } from '../grammar-expression/exec-result-expression.type';
import { onceNextFunction } from '../../next-function/once-next-function';
import { EMPTY_NEXT_FUNCTION } from '../../next-function/empty-next-function';
import { execGrammarExpression } from '../grammar-expression/exec-grammar-expression';

function execGrammarConcatExpression(
  expressions: readonly IGrammarExpressionAstNode[],
  expressionIndex: number,
  rules: IReadonlyGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
  start: number,
  children: readonly IExecResultExpression[],
): INextFunction<IExecResultConcat> {
  if (expressionIndex >= expressions.length) {
    return onceNextFunction((): IExecResultConcat => {
      return {
        __type__: 'concat',
        start,
        end: index,
        children,
      };
    });
  } else {
    const next: INextFunction<IExecResultExpression> = execGrammarExpression(
      expressions[expressionIndex],
      rules,
      buffer,
      index,
    );

    let _next: INextFunction<IExecResultConcat> | null = EMPTY_NEXT_FUNCTION;

    return (): IExecResultConcat | null => {
      while (_next !== null) {
        const _result: IExecResultConcat | null = _next();

        if (_result === null) {
          const result: IExecResultExpression | null = next();
          _next = (result === null)
            ? null
            : execGrammarConcatExpression(
              expressions,
              expressionIndex + 1,
              rules,
              buffer,
              result.end,
              start,
              [
                ...children,
                result,
              ],
            );
        } else {
          return _result;
        }
      }

      return null;
    };

    // return switchMapNextFunction(
    //   execGrammarExpression(
    //     expressions[expressionIndex],
    //     rules,
    //     buffer,
    //     index,
    //   ),
    //   (child: IExecResult): INextFunction<IExecResultConcat> => {
    //     return execGrammarConcatExpression(
    //       expressions,
    //       expressionIndex + 1,
    //       rules,
    //       buffer,
    //       child.end,
    //       start,
    //       [
    //         ...children,
    //         child,
    //       ],
    //     );
    //   },
    // );
  }
}

export function execGrammarConcat(
  node: IGrammarConcatAstNode,
  rules: IReadonlyGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
): INextFunction<IExecResultConcat> {
  return execGrammarConcatExpression(
    node.expressions,
    0,
    rules,
    buffer,
    index,
    index,
    [],
  );
}
