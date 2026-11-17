import { IGrammarRuleIdentifierAstNode } from '../../ast/grammar-rule-identifier/grammar-rule-identifier-ast-node.type';
import { IReadonlyGrammarRulesMap } from '../../ast/grammar/grammar-rules-map.type';
import { INextFunction } from '../../next-function/next-function.type';
import { IExecResultRule } from '../grammar-rule/exec-result-rule.type';

import { execGrammarRule } from '../grammar-rule/exec-grammar-rule';

export function execGrammarRuleIdentifier(
  node: IGrammarRuleIdentifierAstNode,
  rules: IReadonlyGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
): INextFunction<IExecResultRule> {
  return execGrammarRule(
    rules.get(
      node.name,
    )!,
    rules,
    buffer,
    index,
  );
}
