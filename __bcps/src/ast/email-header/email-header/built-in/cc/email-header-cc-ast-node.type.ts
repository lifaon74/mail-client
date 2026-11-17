import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';
import { IEmailContactListAstNode } from '../../../../email-contact/email-contact-list/email-contact-list-ast-node.type';

/** KEY **/

export const EmailHeaderCcAstNodeKey = 'Cc';

export type IEmailHeaderCcAstNodeKey = typeof EmailHeaderCcAstNodeKey;

/** AST NODE **/

export const EmailHeaderCcAstNodeType = 'EmailHeaderCc';

export type IEmailHeaderCcAstNodeType = typeof EmailHeaderCcAstNodeType;

export interface IEmailHeaderCcAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderCcAstNodeType, IEmailHeaderCcAstNodeKey> {
  readonly contacts: IEmailContactListAstNode;
}

export function isEmailHeaderCcAstNode(
  input: object,
): input is IEmailHeaderCcAstNode {
  return isAstNode<IEmailHeaderCcAstNodeType>(input, EmailHeaderCcAstNodeType);
}
