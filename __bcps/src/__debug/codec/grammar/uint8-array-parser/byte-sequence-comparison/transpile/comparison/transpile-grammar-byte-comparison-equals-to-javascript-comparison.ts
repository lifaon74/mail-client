import {
  IGrammarByteComparisonEqualsAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/equals/grammar-byte-comparison-equals-ast-node.type';
import { ILines } from '../../../../../../../misc/lines/lines.type';

export function transpileGrammarByteComparisonEqualsToJavascriptComparison(
  {
    value,
  }: IGrammarByteComparisonEqualsAstNode,
  _value: string,
): ILines {
  return [
    `${_value} === ${value}`,
  ];
}
