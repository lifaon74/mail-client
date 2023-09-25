import {
  IParsedUint8ArrayErrorAstNode,
  IGenericParsedUint8ArrayErrorAstNode,
  isParsedUint8ArrayErrorAstNode,
} from '../../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';

export const ParsedUint8ArrayErrorRepeatAstNodeType = 'ParsedUint8ArrayErrorRepeat';

export type IParsedUint8ArrayErrorRepeatAstNodeType = typeof ParsedUint8ArrayErrorRepeatAstNodeType;

export interface IParsedUint8ArrayErrorRepeatAstNode extends IParsedUint8ArrayErrorAstNode<IParsedUint8ArrayErrorRepeatAstNodeType> {
  readonly error: IGenericParsedUint8ArrayErrorAstNode;
}

export function isParsedUint8ArrayErrorRepeatAstNode(
  input: object,
): input is IParsedUint8ArrayErrorRepeatAstNode {
  return isParsedUint8ArrayErrorAstNode<IParsedUint8ArrayErrorRepeatAstNodeType>(input, ParsedUint8ArrayErrorRepeatAstNodeType);
}

