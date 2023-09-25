import { IEmailBodySharedAstNode } from '../__shared__/email-body-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';
import { IEmailDataAstNode } from '../../../email-data/email-data-ast-node.type';

/** AST NODE **/

export const EmailBodyMultipartAstNodeType = 'EmailBodyMultipart';

export type IEmailBodyMultipartAstNodeType = typeof EmailBodyMultipartAstNodeType;

export interface IEmailBodyMultipartAstNode extends IEmailBodySharedAstNode<IEmailBodyMultipartAstNodeType> {
  readonly boundary: string;
  readonly prelude: string;
  readonly parts: readonly IEmailDataAstNode[];
}

export function isEmailBodyMultipartAstNode(
  input: object,
): input is IEmailBodyMultipartAstNode {
  return isAstNode<IEmailBodyMultipartAstNodeType>(input, EmailBodyMultipartAstNodeType);
}
