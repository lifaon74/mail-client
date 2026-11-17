import { IGrammarRepeatAstNode } from '../../ast/grammar-repeat/grammar-repeat-ast-node.type';
import { IReadonlyGrammarRulesMap } from '../../ast/grammar/grammar-rules-map.type';
import { INextFunction } from '../../next-function/next-function.type';
import { IExecResultRepeat } from './exec-result-repeat.type';
import { IExecResultExpression } from '../grammar-expression/exec-result-expression.type';
import { onceNextFunction } from '../../next-function/once-next-function';
import { EMPTY_NEXT_FUNCTION } from '../../next-function/empty-next-function';
import { execGrammarExpression } from '../grammar-expression/exec-grammar-expression';

function execGrammarRepeatExpression(
  node: IGrammarRepeatAstNode,
  rules: IReadonlyGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
  start: number,
  children: readonly IExecResultExpression[],
): INextFunction<IExecResultRepeat> {

  const next: INextFunction<IExecResultExpression> = execGrammarExpression(
    node.expression,
    rules,
    buffer,
    index,
  );

  let _next: INextFunction<IExecResultRepeat> | null =
    ((node.min <= children.length) && (children.length <= node.max))
      ? onceNextFunction((): IExecResultRepeat => {
        return {
          __type__: 'repeat',
          start,
          end: index,
          children,
        };
      })
      : EMPTY_NEXT_FUNCTION;

  return (): IExecResultRepeat | null => {
    while (_next !== null) {
      const _result: IExecResultRepeat | null = _next();

      if (_result === null) {
        const result: IExecResultExpression | null = next();
        _next = (result === null)
          ? null
          : execGrammarRepeatExpression(
            node,
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
}

export function execGrammarRepeat(
  node: IGrammarRepeatAstNode,
  rules: IReadonlyGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
): INextFunction<IExecResultRepeat> {
  return execGrammarRepeatExpression(
    node,
    rules,
    buffer,
    index,
    index,
    [],
  );
}
