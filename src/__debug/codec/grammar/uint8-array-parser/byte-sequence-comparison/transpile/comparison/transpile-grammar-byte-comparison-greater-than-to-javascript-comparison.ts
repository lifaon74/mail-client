import {
  IGrammarByteComparisonGreaterThanAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/greater-than/grammar-byte-comparison-greater-than-ast-node.type';
import { ILines } from '../../../../../../../misc/lines/lines.type';

export function transpileGrammarByteComparisonGreaterThanToJavascriptComparison(
  {
    value,
  }: IGrammarByteComparisonGreaterThanAstNode,
  _value: string,
): ILines {
  return [
    `${_value} > ${value}`,
  ];
}
