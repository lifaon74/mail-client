import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';
import { IMessageIdListAstNode } from '../../../../message-id/message-id-list/message-id-list-ast-node.type';

/** KEY **/

export const EmailHeaderReferencesAstNodeKey = 'References';

export type IEmailHeaderReferencesAstNodeKey = typeof EmailHeaderReferencesAstNodeKey;

/** AST NODE **/

export const EmailHeaderReferencesAstNodeType = 'EmailHeaderReferences';

export type IEmailHeaderReferencesAstNodeType = typeof EmailHeaderReferencesAstNodeType;

export interface IEmailHeaderReferencesAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderReferencesAstNodeType, IEmailHeaderReferencesAstNodeKey> {
  readonly messageIds: IMessageIdListAstNode;
}

export function isEmailHeaderReferencesAstNode(
  input: object,
): input is IEmailHeaderReferencesAstNode {
  return isAstNode<IEmailHeaderReferencesAstNodeType>(input, EmailHeaderReferencesAstNodeType);
}
