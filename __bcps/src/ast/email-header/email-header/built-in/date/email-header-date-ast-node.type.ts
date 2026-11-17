import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';

/** KEY **/

export const EmailHeaderDateAstNodeKey = 'Date';

export type IEmailHeaderDateAstNodeKey = typeof EmailHeaderDateAstNodeKey;

/** AST NODE **/

export const EmailHeaderDateAstNodeType = 'EmailHeaderDate';

export type IEmailHeaderDateAstNodeType = typeof EmailHeaderDateAstNodeType;

export interface IEmailHeaderDateAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderDateAstNodeType, IEmailHeaderDateAstNodeKey> {
  readonly date: Date;
}

export function isEmailHeaderDateAstNode(
  input: object,
): input is IEmailHeaderDateAstNode {
  return isAstNode<IEmailHeaderDateAstNodeType>(input, EmailHeaderDateAstNodeType);
}
