import {
  IGrammarByteComparisonOrAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/or/grammar-byte-comparison-or-ast-node.type';
import { ILines } from '../../../../../../../misc/lines/lines.type';
import { multilineComparison } from './multiline-comparison';
import {
  IGrammarByteComparisonExpressionAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/grammar-byte-comparison-expression-ast-node.type';

import {
  transpileGrammarByteComparisonExpressionToJavascriptComparison
} from './transpile-grammar-byte-comparison-expression-to-javascript-comparison';

export function transpileGrammarByteComparisonOrToJavascriptComparison(
  {
    expressions,
  }: IGrammarByteComparisonOrAstNode,
  value: string,
): ILines {
  return multilineComparison(
    expressions.map((expression: IGrammarByteComparisonExpressionAstNode): ILines => {
      return transpileGrammarByteComparisonExpressionToJavascriptComparison(expression, value);
    }),
    '||',
    [`false`],
  );
}
