import { IGrammarRepeatAstNode } from '../../../ast/grammar-repeat/grammar-repeat-ast-node.type';
import { ILines } from '../../../../../../misc/lines/lines.type';
import { indentLines } from '../../../../../../misc/lines/functions/indent-lines';
import { inlineLastLines } from '../../../../../../misc/lines/functions/after-last-line';
import { transpileGrammarExpressionToUint8ArrayParser } from '../../expression/transpile/transpile-grammar-expression-to-uint8-array-parser';

export function transpileGrammarRepeatToUint8ArrayParser(
  {
    expression,
    min,
    max,
  }: IGrammarRepeatAstNode,
): ILines {
  return [
    `(buffer, index) => {`,
    ...indentLines([
      `return repeatUint8ArrayParser(`,
      ...indentLines([
        `buffer,`,
        `index,`,
        ...inlineLastLines(
          transpileGrammarExpressionToUint8ArrayParser(expression),
          [`,`],
        ),
        `${min},`,
        `${max},`,
      ]),
      `);`,
    ]),
    `}`,
  ];
}

