import {
  IParsedUint8ArrayErrorAstNode,
  IGenericParsedUint8ArrayErrorAstNode,
  isParsedUint8ArrayErrorAstNode,
} from '../../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';
import { IGenericParsedUint8ArrayAstNode } from '../../../__shared__/ast/parsed-uint8-array-ast-node.type';

export const ParsedUint8ArrayErrorConcatAstNodeType = 'ParsedUint8ArrayErrorConcat';

export type IParsedUint8ArrayErrorConcatAstNodeType = typeof ParsedUint8ArrayErrorConcatAstNodeType;

export interface IParsedUint8ArrayErrorConcatAstNode extends IParsedUint8ArrayErrorAstNode<IParsedUint8ArrayErrorConcatAstNodeType> {
  readonly error: IGenericParsedUint8ArrayErrorAstNode;
  readonly children: readonly IGenericParsedUint8ArrayAstNode[];
}

export function isParsedUint8ArrayErrorConcatAstNode(
  input: object,
): input is IParsedUint8ArrayErrorConcatAstNode {
  return isParsedUint8ArrayErrorAstNode<IParsedUint8ArrayErrorConcatAstNodeType>(input, ParsedUint8ArrayErrorConcatAstNodeType);
}

