import { IParsedUint8ArrayAstNode } from '../../__shared__/ast/parsed-uint8-array-ast-node.type';
import { isAstNode } from '../../../../../../ast/__shared__/is-ast-node';

export const ParsedUint8ArrayEndAstNodeType = 'ParsedUint8ArrayEnd';

export type IParsedUint8ArrayEndAstNodeType = typeof ParsedUint8ArrayEndAstNodeType;

export interface IParsedUint8ArrayEndAstNode extends IParsedUint8ArrayAstNode<IParsedUint8ArrayEndAstNodeType> {
}

export function isParsedUint8ArrayEndAstNode(
  input: object,
): input is IParsedUint8ArrayEndAstNode {
  return isAstNode<IParsedUint8ArrayEndAstNodeType>(input, ParsedUint8ArrayEndAstNodeType);
}

