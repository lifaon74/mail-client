import {
  IParsedUint8ArrayErrorAstNode,
  IGenericParsedUint8ArrayErrorAstNode,
  isParsedUint8ArrayErrorAstNode,
} from '../../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';

export const ParsedUint8ArrayErrorRuleAstNodeType = 'ParsedUint8ArrayErrorRule';

export type IParsedUint8ArrayErrorRuleAstNodeType = typeof ParsedUint8ArrayErrorRuleAstNodeType;

export interface IParsedUint8ArrayErrorRuleAstNode extends IParsedUint8ArrayErrorAstNode<IParsedUint8ArrayErrorRuleAstNodeType> {
  readonly name: string;
  readonly error: IGenericParsedUint8ArrayErrorAstNode;
}

export function isParsedUint8ArrayErrorRuleAstNode(
  input: object,
): input is IParsedUint8ArrayErrorRuleAstNode {
  return isParsedUint8ArrayErrorAstNode<IParsedUint8ArrayErrorRuleAstNodeType>(input, ParsedUint8ArrayErrorRuleAstNodeType);
}

