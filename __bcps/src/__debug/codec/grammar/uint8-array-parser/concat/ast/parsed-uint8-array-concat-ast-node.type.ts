import { IParsedUint8ArrayAstNode, IGenericParsedUint8ArrayAstNode } from '../../__shared__/ast/parsed-uint8-array-ast-node.type';
import { isAstNode } from '../../../../../../ast/__shared__/is-ast-node';

export const ParsedUint8ArrayConcatAstNodeType = 'ParsedUint8ArrayConcat';

export type IParsedUint8ArrayConcatAstNodeType = typeof ParsedUint8ArrayConcatAstNodeType;

export interface IParsedUint8ArrayConcatAstNode extends IParsedUint8ArrayAstNode<IParsedUint8ArrayConcatAstNodeType> {
  readonly children: readonly IGenericParsedUint8ArrayAstNode[];
}

export function isParsedUint8ArrayConcatAstNode(
  input: object,
): input is IParsedUint8ArrayConcatAstNode {
  return isAstNode<IParsedUint8ArrayConcatAstNodeType>(input, ParsedUint8ArrayConcatAstNodeType);
}

