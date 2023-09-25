import { isAstNode } from '../../../../__shared__/is-ast-node';
import { IEmailBodySharedAstNode } from '../__shared__/email-body-shared-ast-node.type';

/** AST NODE **/

export const EmailBodyTextAstNodeType = 'EmailBodyText';

export type IEmailBodyTextAstNodeType = typeof EmailBodyTextAstNodeType;

export interface IEmailBodyTextAstNode extends IEmailBodySharedAstNode<IEmailBodyTextAstNodeType> {
  readonly charset: string;
  readonly encoding: string;
  readonly value: string;
}

export function isEmailBodyTextAstNode(
  input: object,
): input is IEmailBodyTextAstNode {
  return isAstNode<IEmailBodyTextAstNodeType>(input, EmailBodyTextAstNodeType);
}
