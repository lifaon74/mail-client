import {
  IGrammarByteSequenceComparisonAstNode,
} from '../../../ast/grammar-byte-sequence-comparison/grammar-byte-sequence-comparison-ast-node.type';
import { ILines } from '../../../../../../misc/lines/lines.type';
import { indentLines } from '../../../../../../misc/lines/functions/indent-lines';
import { multilineComparison } from './comparison/multiline-comparison';
import {
  IGrammarByteComparisonExpressionAstNode,
} from '../../../ast/grammar-byte-sequence-comparison/comparisons/grammar-byte-comparison-expression-ast-node.type';
import {
  transpileGrammarByteComparisonExpressionToJavascriptComparison,
} from './comparison/transpile-grammar-byte-comparison-expression-to-javascript-comparison';

export function transpileGrammarByteSequenceComparisonToUint8ArrayParser(
  {
    expressions,
  }: IGrammarByteSequenceComparisonAstNode,
): ILines {
  return [
    `(buffer, index) => {`,
    ...indentLines([
      `return byteSequenceComparisonUint8ArrayParser(buffer, index, index + ${expressions.length}, (buffer, index) => {`,
      ...indentLines([
        ...expressions.flatMap((_, index: number): ILines => {
          return [
            `const b${index} = buffer[index + ${index}];`,
          ];
        }),
        `return (`,
        ...indentLines(
          multilineComparison(
            expressions.map((expression: IGrammarByteComparisonExpressionAstNode, index: number): ILines => {
              return transpileGrammarByteComparisonExpressionToJavascriptComparison(expression, `b${index}`);
            }),
            '&&',
            [`true`],
          ),
        ),
        `);`,
      ]),
      `});`,
    ]),
    `}`,
  ];
}
