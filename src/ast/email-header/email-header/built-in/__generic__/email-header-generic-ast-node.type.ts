import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';

export const EmailHeaderGenericAstNodeType = 'EmailHeaderGeneric';

export type IEmailHeaderGenericAstNodeType = typeof EmailHeaderGenericAstNodeType;

export interface IEmailHeaderGenericAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderGenericAstNodeType, string> {
  readonly value: string;
}

export function isEmailHeaderGenericAstNode(
  input: object,
): input is IEmailHeaderGenericAstNode {
  return isAstNode<IEmailHeaderGenericAstNodeType>(input, EmailHeaderGenericAstNodeType);
}
