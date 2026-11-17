import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';

/** KEY **/

export const EmailHeaderSubjectAstNodeKey = 'Subject';

export type IEmailHeaderSubjectAstNodeKey = typeof EmailHeaderSubjectAstNodeKey;

/** AST NODE **/

export const EmailHeaderSubjectAstNodeType = 'EmailHeaderSubject';

export type IEmailHeaderSubjectAstNodeType = typeof EmailHeaderSubjectAstNodeType;

export interface IEmailHeaderSubjectAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderSubjectAstNodeType, IEmailHeaderSubjectAstNodeKey> {
  readonly value: string;
}

export function isEmailHeaderSubjectAstNode(
  input: object,
): input is IEmailHeaderSubjectAstNode {
  return isAstNode<IEmailHeaderSubjectAstNodeType>(input, EmailHeaderSubjectAstNodeType);
}
