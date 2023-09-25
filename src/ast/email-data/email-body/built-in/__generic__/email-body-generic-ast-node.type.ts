import { IEmailBodySharedAstNode } from '../__shared__/email-body-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';

/** AST NODE **/

export const EmailBodyGenericAstNodeType = 'EmailBodyGeneric';

export type IEmailBodyGenericAstNodeType = typeof EmailBodyGenericAstNodeType;

export interface IEmailBodyGenericAstNode extends IEmailBodySharedAstNode<IEmailBodyGenericAstNodeType> {
  readonly value: string;
}

export function isEmailBodyGenericAstNode(
  input: object,
): input is IEmailBodyGenericAstNode {
  return isAstNode<IEmailBodyGenericAstNodeType>(input, EmailBodyGenericAstNodeType);
}
