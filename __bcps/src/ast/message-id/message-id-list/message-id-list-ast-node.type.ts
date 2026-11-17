import { IAstNode } from '../../__shared__/ast-node.type';
import { IMessageIdAstNode } from '../message-id/message-id-ast-node.type';
import { isAstNode } from '../../__shared__/is-ast-node';

export const MessageIdListAstNodeType = 'MessageIdList';

export type IMessageIdListAstNodeType = typeof MessageIdListAstNodeType;

export interface IMessageIdListAstNode extends IAstNode<IMessageIdListAstNodeType> {
  readonly items: readonly IMessageIdAstNode[];
}

export function isMessageIdListAstNode(
  input: object,
): input is IMessageIdListAstNode {
  return isAstNode<IMessageIdListAstNodeType>(input, MessageIdListAstNodeType);
}
