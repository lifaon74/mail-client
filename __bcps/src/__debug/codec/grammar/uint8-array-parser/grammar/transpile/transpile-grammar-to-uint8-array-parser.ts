import { IGrammarAstNode } from '../../../ast/grammar/grammar-ast-node.type';
import { ILines } from '../../../../../../misc/lines/lines.type';
import { indentLines } from '../../../../../../misc/lines/functions/indent-lines';
import {
  transpileGrammarRuleToUint8ArrayParser,
} from '../../rule/transpile/transpile-grammar-rule-to-uint8-array-parser';

export function transpileGrammarToUint8ArrayParser(
  {
    rules,
  }: IGrammarAstNode,
): ILines {
  return [
    `(`,
    ...indentLines([
      `rules = new Map(),`,
    ]),
    `) => {`,
    ...indentLines([
      ...rules.flatMap(transpileGrammarRuleToUint8ArrayParser),
      `return rules;`,
    ]),
    `}`,
  ];
}
