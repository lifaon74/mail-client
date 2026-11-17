import {
  IGrammarByteComparisonNotEqualsAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/not-equals/grammar-byte-comparison-not-equals-ast-node.type';
import { ILines } from '../../../../../../../misc/lines/lines.type';

export function transpileGrammarByteComparisonNotEqualsToJavascriptComparison(
  {
    value,
  }: IGrammarByteComparisonNotEqualsAstNode,
  _value: string,
): ILines {
  return [
    `${_value} !== ${value}`,
  ];
}
