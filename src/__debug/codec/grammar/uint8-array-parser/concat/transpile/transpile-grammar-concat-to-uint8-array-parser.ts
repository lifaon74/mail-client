import { IGrammarConcatAstNode } from '../../../ast/grammar-concat/grammar-concat-ast-node.type';
import { ILines } from '../../../../../../misc/lines/lines.type';
import { indentLines } from '../../../../../../misc/lines/functions/indent-lines';
import { IGrammarExpressionAstNode } from '../../../ast/grammar-expression/grammar-expression-ast-node.type';
import { inlineLastLines } from '../../../../../../misc/lines/functions/after-last-line';

import { transpileGrammarExpressionToUint8ArrayParser } from '../../expression/transpile/transpile-grammar-expression-to-uint8-array-parser';

export function transpileGrammarConcatToUint8ArrayParser(
  {
    expressions,
  }: IGrammarConcatAstNode,
): ILines {
  return [
    `(buffer, index) => {`,
    ...indentLines([
      `return concatUint8ArrayParser(buffer, index, [`,
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


