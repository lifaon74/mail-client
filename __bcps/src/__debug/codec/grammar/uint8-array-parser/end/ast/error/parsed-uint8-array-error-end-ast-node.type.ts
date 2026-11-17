import {
  IParsedUint8ArrayErrorAstNode,
  isParsedUint8ArrayErrorAstNode,
} from '../../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';

export const ParsedUint8ArrayErrorEndAstNodeType = 'ParsedUint8ArrayErrorEnd';

export type IParsedUint8ArrayErrorEndAstNodeType = typeof ParsedUint8ArrayErrorEndAstNodeType;

export interface IParsedUint8ArrayErrorEndAstNode extends IParsedUint8ArrayErrorAstNode<IParsedUint8ArrayErrorEndAstNodeType> {
}

export function isParsedUint8ArrayErrorEndAstNode(
  input: object,
): input is IParsedUint8ArrayErrorEndAstNode {
  return isParsedUint8ArrayErrorAstNode<IParsedUint8ArrayErrorEndAstNodeType>(input, ParsedUint8ArrayErrorEndAstNodeType);
}

