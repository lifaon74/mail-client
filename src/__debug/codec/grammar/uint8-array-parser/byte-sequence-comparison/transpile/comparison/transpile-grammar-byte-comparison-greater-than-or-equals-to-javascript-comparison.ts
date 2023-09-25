import {
  IGrammarByteComparisonGreaterThanOrEqualsAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/greater-than-or-equals/grammar-byte-comparison-greater-than-or-equals-ast-node.type';
import { ILines } from '../../../../../../../misc/lines/lines.type';

export function transpileGrammarByteComparisonGreaterThanOrEqualsToJavascriptComparison(
  {
    value,
  }: IGrammarByteComparisonGreaterThanOrEqualsAstNode,
  _value: string,
): ILines {
  return [
    `${_value} >= ${value}`,
  ];
}
