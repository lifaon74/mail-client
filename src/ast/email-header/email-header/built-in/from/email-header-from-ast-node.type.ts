import { IEmailContactListAstNode } from '../../../../email-contact/email-contact-list/email-contact-list-ast-node.type';
import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';

/** KEY **/

export const EmailHeaderFromAstNodeKey = 'From';

export type IEmailHeaderFromAstNodeKey = typeof EmailHeaderFromAstNodeKey;

/** AST NODE **/

export const EmailHeaderFromAstNodeType = 'EmailHeaderFrom';

export type IEmailHeaderFromAstNodeType = typeof EmailHeaderFromAstNodeType;

export interface IEmailHeaderFromAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderFromAstNodeType, IEmailHeaderFromAstNodeKey> {
  readonly contacts: IEmailContactListAstNode;
}

export function isEmailHeaderFromAstNode(
  input: object,
): input is IEmailHeaderFromAstNode {
  return isAstNode<IEmailHeaderFromAstNodeType>(input, EmailHeaderFromAstNodeType);
}
