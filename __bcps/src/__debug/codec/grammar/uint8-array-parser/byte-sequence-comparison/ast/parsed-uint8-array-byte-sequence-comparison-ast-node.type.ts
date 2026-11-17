import { IParsedUint8ArrayAstNode } from '../../__shared__/ast/parsed-uint8-array-ast-node.type';
import { isAstNode } from '../../../../../../ast/__shared__/is-ast-node';

export const ParsedUint8ArrayByteSequenceComparisonAstNodeType = 'ParsedUint8ArrayByteSequenceComparison';

export type IParsedUint8ArrayByteSequenceComparisonAstNodeType = typeof ParsedUint8ArrayByteSequenceComparisonAstNodeType;

export interface IParsedUint8ArrayByteSequenceComparisonAstNode extends IParsedUint8ArrayAstNode<IParsedUint8ArrayByteSequenceComparisonAstNodeType> {
}

export function isParsedUint8ArrayByteSequenceComparisonAstNode(
  input: object,
): input is IParsedUint8ArrayByteSequenceComparisonAstNode {
  return isAstNode<IParsedUint8ArrayByteSequenceComparisonAstNodeType>(input, ParsedUint8ArrayByteSequenceComparisonAstNodeType);
}

