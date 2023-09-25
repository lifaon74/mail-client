import {
  IGrammarByteComparisonLowerThanAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/lower-than/grammar-byte-comparison-lower-than-ast-node.type';
import { ILines } from '../../../../../../../misc/lines/lines.type';

export function transpileGrammarByteComparisonLowerThanToJavascriptComparison(
  {
    value,
  }: IGrammarByteComparisonLowerThanAstNode,
  _value: string,
): ILines {
  return [
    `${_value} < ${value}`,
  ];
}
