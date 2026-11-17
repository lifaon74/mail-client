import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';
import { IEmailContactListAstNode } from '../../../../email-contact/email-contact-list/email-contact-list-ast-node.type';

/** KEY **/

export const EmailHeaderToAstNodeKey = 'To';

export type IEmailHeaderToAstNodeKey = typeof EmailHeaderToAstNodeKey;

/** AST NODE **/

export const EmailHeaderToAstNodeType = 'EmailHeaderTo';

export type IEmailHeaderToAstNodeType = typeof EmailHeaderToAstNodeType;

export interface IEmailHeaderToAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderToAstNodeType, IEmailHeaderToAstNodeKey> {
  readonly contacts: IEmailContactListAstNode;
}

export function isEmailHeaderToAstNode(
  input: object,
): input is IEmailHeaderToAstNode {
  return isAstNode<IEmailHeaderToAstNodeType>(input, EmailHeaderToAstNodeType);
}
