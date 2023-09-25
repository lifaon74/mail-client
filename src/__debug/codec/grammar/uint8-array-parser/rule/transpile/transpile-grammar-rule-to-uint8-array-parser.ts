import { IGrammarRuleAstNode } from '../../../ast/grammar-rule/grammar-rule-ast-node.type';
import { ILines } from '../../../../../../misc/lines/lines.type';
import { indentLines } from '../../../../../../misc/lines/functions/indent-lines';
import { inlineLastLines } from '../../../../../../misc/lines/functions/after-last-line';
import { transpileGrammarExpressionToUint8ArrayParser } from '../../expression/transpile/transpile-grammar-expression-to-uint8-array-parser';

export function transpileGrammarRuleToUint8ArrayParser(
  {
    name,
    expression,
  }: IGrammarRuleAstNode,
): ILines {
  return [
    `rules.set(${JSON.stringify(name)}, (buffer, index) => {`,
    ...indentLines([
      `return ruleUint8ArrayParser(`,
      ...indentLines([
        `buffer,`,
        `index,`,
        `${JSON.stringify(name)},`,
        ...inlineLastLines(
          transpileGrammarExpressionToUint8ArrayParser(expression),
          [`,`],
        ),
      ]),
      `);`,
    ]),
    `});`,
  ];
}

