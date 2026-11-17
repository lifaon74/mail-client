import { IAstNode } from '../../__shared__/ast-node.type';

export const MessageIdAstNodeType = 'MessageId';

export type IMessageIdAstNodeType = typeof MessageIdAstNodeType;

export interface IMessageIdAstNode extends IAstNode<IMessageIdAstNodeType> {
  readonly left: string;
  readonly right: string;
}

