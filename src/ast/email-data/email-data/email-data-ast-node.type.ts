import { IAstNode } from '../../__shared__/ast-node.type';
import { IEmailHeaderListAstNode } from '../../email-header/email-header-list/email-header-list-ast-node.type';
import { IEmailBodyAstNode } from '../email-body/email-body-ast-node.type';

export const EmailDataAstNodeType = 'EmailData';

export type IEmailDataAstNodeType = typeof EmailDataAstNodeType;

export interface IEmailDataAstNode extends IAstNode<IEmailDataAstNodeType> {
  readonly headers: IEmailHeaderListAstNode;
  readonly body: IEmailBodyAstNode;
}

