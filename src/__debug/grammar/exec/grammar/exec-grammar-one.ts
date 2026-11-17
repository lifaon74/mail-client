import { IGrammarAstNode } from '../../ast/grammar/grammar-ast-node.type';
import { IExecResultRule } from '../grammar-rule/exec-result-rule.type';
import { INextFunction } from '../../next-function/next-function.type';
import { execGrammar } from './exec-grammar';

export function execGrammarOne(
  node: IGrammarAstNode,
  rule: string,
  buffer: Uint8Array,
  index: number,
): IExecResultRule {
  const next: INextFunction<IExecResultRule> = execGrammar(
    node,
    rule,
    buffer,
    index,
  );

  const result: IExecResultRule | null = next();

  if (result === null) {
    throw new Error(`The input string does not match the grammar's rule: ${JSON.stringify(rule)}`);
  } else if (next() !== null) {
    throw new Error(`The input string matched many times the rule: ${JSON.stringify(rule)}`);
  } else {
    return result;
  }
}
