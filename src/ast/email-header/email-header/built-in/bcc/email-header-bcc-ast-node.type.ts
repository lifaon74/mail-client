import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';
import { IEmailContactListAstNode } from '../../../../email-contact/email-contact-list/email-contact-list-ast-node.type';

/** KEY **/

export const EmailHeaderBccAstNodeKey = 'Bcc';

export type IEmailHeaderBccAstNodeKey = typeof EmailHeaderBccAstNodeKey;

/** AST NODE **/

export const EmailHeaderBccAstNodeType = 'EmailHeaderBcc';

export type IEmailHeaderBccAstNodeType = typeof EmailHeaderBccAstNodeType;

export interface IEmailHeaderBccAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderBccAstNodeType, IEmailHeaderBccAstNodeKey> {
  readonly contacts: IEmailContactListAstNode;
}

export function isEmailHeaderBccAstNode(
  input: object,
): input is IEmailHeaderBccAstNode {
  return isAstNode<IEmailHeaderBccAstNodeType>(input, EmailHeaderBccAstNodeType);
}
