import { IParsedUint8ArrayAstNode, IGenericParsedUint8ArrayAstNode } from '../../__shared__/ast/parsed-uint8-array-ast-node.type';
import { isAstNode } from '../../../../../../ast/__shared__/is-ast-node';

export const ParsedUint8ArrayRuleAstNodeType = 'ParsedUint8ArrayRule';

export type IParsedUint8ArrayRuleAstNodeType = typeof ParsedUint8ArrayRuleAstNodeType;

export interface IParsedUint8ArrayRuleAstNode extends IParsedUint8ArrayAstNode<IParsedUint8ArrayRuleAstNodeType> {
  readonly name: string;
  readonly child: IGenericParsedUint8ArrayAstNode;
}

export function isParsedUint8ArrayRuleAstNode(
  input: object,
): input is IParsedUint8ArrayRuleAstNode {
  return isAstNode<IParsedUint8ArrayRuleAstNodeType>(input, ParsedUint8ArrayRuleAstNodeType);
}

