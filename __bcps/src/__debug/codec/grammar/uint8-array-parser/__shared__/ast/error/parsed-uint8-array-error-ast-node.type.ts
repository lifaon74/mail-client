import { IParsedUint8ArrayAstNode } from '../parsed-uint8-array-ast-node.type';
import { isAstNode } from '../../../../../../../ast/__shared__/is-ast-node';

export const ParsedUint8ArrayErrorAstNodeType = 'ParsedUint8ArrayError';

export type IParsedUint8ArrayErrorAstNodeType = typeof ParsedUint8ArrayErrorAstNodeType;

export interface IParsedUint8ArrayErrorAstNode<GSubType extends string> extends IParsedUint8ArrayAstNode<IParsedUint8ArrayErrorAstNodeType> {
  readonly __subtype__: GSubType;
}

export function isParsedUint8ArrayErrorAstNode<GSubType extends string>(
  input: object,
  subtype: GSubType,
): input is IParsedUint8ArrayErrorAstNode<GSubType> {
  return isGenericParsedUint8ArrayErrorAstNode(input)
    && (input as IGenericParsedUint8ArrayErrorAstNode).__subtype__ === subtype;
}

/* GENERIC */

export type IGenericParsedUint8ArrayErrorAstNode = IParsedUint8ArrayErrorAstNode<string>;

export function isGenericParsedUint8ArrayErrorAstNode(
  input: object,
): input is IGenericParsedUint8ArrayErrorAstNode {
  return isAstNode<IParsedUint8ArrayErrorAstNodeType>(input, ParsedUint8ArrayErrorAstNodeType);
}

