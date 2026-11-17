import {
  IGrammarByteComparisonLowerThanOrEqualsAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/lower-than-or-equals/grammar-byte-comparison-lower-than-or-equals-ast-node.type';
import { ILines } from '../../../../../../../misc/lines/lines.type';

export function transpileGrammarByteComparisonLowerThanOrEqualsToJavascriptComparison(
  {
    value,
  }: IGrammarByteComparisonLowerThanOrEqualsAstNode,
  _value: string,
): ILines {
  return [
    `${_value} <= ${value}`,
  ];
}
