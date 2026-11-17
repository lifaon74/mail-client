import { IParsedUint8ArrayAstNode, IGenericParsedUint8ArrayAstNode } from '../../__shared__/ast/parsed-uint8-array-ast-node.type';
import { isAstNode } from '../../../../../../ast/__shared__/is-ast-node';
import { IGenericParsedUint8ArrayErrorAstNode } from '../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';

export const ParsedUint8ArrayRepeatAstNodeType = 'ParsedUint8ArrayRepeat';

export type IParsedUint8ArrayRepeatAstNodeType = typeof ParsedUint8ArrayRepeatAstNodeType;

export interface IParsedUint8ArrayRepeatAstNode extends IParsedUint8ArrayAstNode<IParsedUint8ArrayRepeatAstNodeType> {
  readonly children: readonly IGenericParsedUint8ArrayAstNode[];
  readonly error: IGenericParsedUint8ArrayErrorAstNode | undefined;
}

export function isParsedUint8ArrayRepeatAstNode(
  input: object,
): input is IParsedUint8ArrayRepeatAstNode {
  return isAstNode<IParsedUint8ArrayRepeatAstNodeType>(input, ParsedUint8ArrayRepeatAstNodeType);
}

