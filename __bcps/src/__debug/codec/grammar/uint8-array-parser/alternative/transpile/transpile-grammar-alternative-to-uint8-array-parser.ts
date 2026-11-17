import { IGrammarAlternativeAstNode } from '../../../ast/grammar-alternative/grammar-alternative-ast-node.type';
import { ILines } from '../../../../../../misc/lines/lines.type';
import { indentLines } from '../../../../../../misc/lines/functions/indent-lines';
import { IGrammarExpressionAstNode } from '../../../ast/grammar-expression/grammar-expression-ast-node.type';
import { inlineLastLines } from '../../../../../../misc/lines/functions/after-last-line';

import { transpileGrammarExpressionToUint8ArrayParser } from '../../expression/transpile/transpile-grammar-expression-to-uint8-array-parser';

export function transpileGrammarAlternativeToUint8ArrayParser(
  {
    expressions,
  }: IGrammarAlternativeAstNode,
): ILines {
  return [
    `(buffer, index) => {`,
    ...indentLines([
      `return alternativeUint8ArrayParser(buffer, index, [`,
      ...indentLines([
        ...expressions.flatMap((expression: IGrammarExpressionAstNode): ILines => {
          return inlineLastLines(
            transpileGrammarExpressionToUint8ArrayParser(expression),
            [`,`],
          );
        }),
      ]),
      `]);`,
    ]),
    `}`,
  ];
}

