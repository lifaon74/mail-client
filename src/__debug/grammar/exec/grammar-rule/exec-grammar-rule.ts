import { IGrammarRuleAstNode } from '../../ast/grammar-rule/grammar-rule-ast-node.type';
import { IReadonlyGrammarRulesMap } from '../../ast/grammar/grammar-rules-map.type';
import { INextFunction } from '../../next-function/next-function.type';
import { IExecResultRule } from './exec-result-rule.type';
import { mapNextFunction } from '../../next-function/map-next-function';
import { execGrammarExpression } from '../grammar-expression/exec-grammar-expression';
import { IExecResultExpression } from '../grammar-expression/exec-result-expression.type';

export function execGrammarRule(
  node: IGrammarRuleAstNode,
  rules: IReadonlyGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
): INextFunction<IExecResultRule> {
  return mapNextFunction(
    execGrammarExpression(
      node.expression,
      rules,
      buffer,
      index,
    ),
    (
      result: IExecResultExpression,
    ): IExecResultRule => {
      return {
        __type__: 'rule',
        name: node.name,
        start: result.start,
        end: result.end,
        child: result,
      };
    },
  );
}
