import {
  IParsedUint8ArrayErrorAstNode,
  isParsedUint8ArrayErrorAstNode,
} from '../../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';

export const ParsedUint8ArrayErrorByteSequenceComparisonAstNodeType = 'ParsedUint8ArrayErrorByteSequenceComparison';

export type IParsedUint8ArrayErrorByteSequenceComparisonAstNodeType = typeof ParsedUint8ArrayErrorByteSequenceComparisonAstNodeType;

export interface IParsedUint8ArrayErrorByteSequenceComparisonAstNode extends IParsedUint8ArrayErrorAstNode<IParsedUint8ArrayErrorByteSequenceComparisonAstNodeType> {
}

export function isParsedUint8ArrayErrorByteSequenceComparisonAstNode(
  input: object,
): input is IParsedUint8ArrayErrorByteSequenceComparisonAstNode {
  return isParsedUint8ArrayErrorAstNode<IParsedUint8ArrayErrorByteSequenceComparisonAstNodeType>(input, ParsedUint8ArrayErrorByteSequenceComparisonAstNodeType);
}

