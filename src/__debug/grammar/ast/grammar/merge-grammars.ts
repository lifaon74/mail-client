import { IGrammarAstNode } from './grammar-ast-node.type';
import { IGrammarRuleAstNode } from '../grammar-rule/grammar-rule-ast-node.type';
import { Grammar } from './grammar';

export interface IMergeGrammarsOptions {
  readonly duplicateMode?: 'replace' | 'throw';
}

export function mergeGrammars(
  grammars: readonly IGrammarAstNode[],
  {
    duplicateMode = 'throw',
  }: IMergeGrammarsOptions = {},
): IGrammarAstNode {
  const rules: Map<string, IGrammarRuleAstNode> = new Map<string, IGrammarRuleAstNode>();

  for (let i = 0, l = grammars.length; i < l; i++) {
    const grammar: IGrammarAstNode = grammars[i];

    const iterator: Iterator<IGrammarRuleAstNode> = grammar.rules.values();
    let result: IteratorResult<IGrammarRuleAstNode>;
    while (!(result = iterator.next()).done) {
      const rule: IGrammarRuleAstNode = result.value;

      if (rules.has(rule.name)) {
        if (duplicateMode === 'throw') {
          throw new Error(`Duplicate rule: ${JSON.stringify(rule.name)}`);
        }
      }

      rules.set(rule.name, rule);
    }
  }

  return Grammar(
    rules,
  );
}
