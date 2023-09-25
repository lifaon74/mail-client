import {
  IGrammarByteComparisonNotAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/not/grammar-byte-comparison-not-ast-node.type';
import { ILines } from '../../../../../../../misc/lines/lines.type';
import { indentLines } from '../../../../../../../misc/lines/functions/indent-lines';

import {
  transpileGrammarByteComparisonExpressionToJavascriptComparison
} from './transpile-grammar-byte-comparison-expression-to-javascript-comparison';

export function transpileGrammarByteComparisonNotToJavascriptComparison(
  {
    expression,
  }: IGrammarByteComparisonNotAstNode,
  value: string,
): ILines {
  return [
    `!(`,
    ...indentLines(
      transpileGrammarByteComparisonExpressionToJavascriptComparison(expression, value),
    ),
    `)`,
  ];
}
