import { IParsedUint8ArrayAstNode, IGenericParsedUint8ArrayAstNode } from '../../__shared__/ast/parsed-uint8-array-ast-node.type';
import { isAstNode } from '../../../../../../ast/__shared__/is-ast-node';

export const ParsedUint8ArrayAlternativeAstNodeType = 'ParsedUint8ArrayAlternative';

export type IParsedUint8ArrayAlternativeAstNodeType = typeof ParsedUint8ArrayAlternativeAstNodeType;

export interface IParsedUint8ArrayAlternativeAstNode extends IParsedUint8ArrayAstNode<IParsedUint8ArrayAlternativeAstNodeType> {
  readonly child: IGenericParsedUint8ArrayAstNode;
}

export function isParsedUint8ArrayAlternativeAstNode(
  input: object,
): input is IParsedUint8ArrayAlternativeAstNode {
  return isAstNode<IParsedUint8ArrayAlternativeAstNodeType>(input, ParsedUint8ArrayAlternativeAstNodeType);
}

