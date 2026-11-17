import { IGrammarAstNode } from '../../ast/grammar/grammar-ast-node.type';
import { INextFunction } from '../../next-function/next-function.type';
import { IExecResultRule } from '../grammar-rule/exec-result-rule.type';
import { execGrammarRule } from '../grammar-rule/exec-grammar-rule';

export function execGrammar(
  node: IGrammarAstNode,
  rule: string,
  buffer: Uint8Array,
  index: number,
): INextFunction<IExecResultRule> {
  if (node.rules.has(rule)) {
    return execGrammarRule(
      node.rules.get(rule)!,
      node.rules,
      buffer,
      index,
    );
  } else {
    throw new Error(`Rule ${JSON.stringify(rule)} does not exist into this grammar.`);
  }

}

