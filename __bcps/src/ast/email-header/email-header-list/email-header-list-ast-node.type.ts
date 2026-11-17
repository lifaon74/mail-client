import { IAstNode } from '../../__shared__/ast-node.type';
import { IEmailHeaderAstNode } from '../email-header/email-header-ast-node.type';
import { isAstNode } from '../../__shared__/is-ast-node';

export const EmailHeaderListAstNodeType = 'EmailHeaderList';

export type IEmailHeaderListAstNodeType = typeof EmailHeaderListAstNodeType;

export interface IEmailHeaderListAstNode extends IAstNode<IEmailHeaderListAstNodeType> {
  readonly items: readonly IEmailHeaderAstNode[];
}

export function isEmailHeaderListAstNode(
  input: object,
): input is IEmailHeaderListAstNode {
  return isAstNode<IEmailHeaderListAstNodeType>(input, EmailHeaderListAstNodeType);
}
