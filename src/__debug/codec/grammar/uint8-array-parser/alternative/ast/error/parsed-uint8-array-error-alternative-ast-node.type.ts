import {
  IParsedUint8ArrayErrorAstNode,
  IGenericParsedUint8ArrayErrorAstNode,
  isParsedUint8ArrayErrorAstNode,
} from '../../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';

export const ParsedUint8ArrayErrorAlternativeAstNodeType = 'ParsedUint8ArrayErrorAlternative';

export type IParsedUint8ArrayErrorAlternativeAstNodeType = typeof ParsedUint8ArrayErrorAlternativeAstNodeType;

export interface IParsedUint8ArrayErrorAlternativeAstNode extends IParsedUint8ArrayErrorAstNode<IParsedUint8ArrayErrorAlternativeAstNodeType> {
  readonly errors: readonly IGenericParsedUint8ArrayErrorAstNode[];
}

export function isParsedUint8ArrayErrorAlternativeAstNode(
  input: object,
): input is IParsedUint8ArrayErrorAlternativeAstNode {
  return isParsedUint8ArrayErrorAstNode<IParsedUint8ArrayErrorAlternativeAstNodeType>(input, ParsedUint8ArrayErrorAlternativeAstNodeType);
}

