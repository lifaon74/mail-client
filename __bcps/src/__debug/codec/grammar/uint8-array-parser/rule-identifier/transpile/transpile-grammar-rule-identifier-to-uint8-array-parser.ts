import { IGrammarRuleIdentifierAstNode } from '../../../ast/grammar-rule-identifier/grammar-rule-identifier-ast-node.type';
import { ILines } from '../../../../../../misc/lines/lines.type';
import { indentLines } from '../../../../../../misc/lines/functions/indent-lines';

export function transpileGrammarRuleIdentifierToUint8ArrayParser(
  {
    name,
  }: IGrammarRuleIdentifierAstNode,
): ILines {
  return [
    `(buffer, index) => {`,
    ...indentLines([
      `return rules.get(${JSON.stringify(name)})(buffer, index);`,
    ]),
    `}`,
  ];
}
