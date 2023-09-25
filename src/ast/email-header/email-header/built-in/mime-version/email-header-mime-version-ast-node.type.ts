import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';

/** KEY **/

export const EmailHeaderMimeVersionAstNodeKey = 'MIME-Version';

export type IEmailHeaderMimeVersionAstNodeKey = typeof EmailHeaderMimeVersionAstNodeKey;

/** AST NODE **/

export const EmailHeaderMimeVersionAstNodeType = 'EmailHeaderMimeVersion';

export type IEmailHeaderMimeVersionAstNodeType = typeof EmailHeaderMimeVersionAstNodeType;

export interface IEmailHeaderMimeVersionAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderMimeVersionAstNodeType, IEmailHeaderMimeVersionAstNodeKey> {
  readonly version: number;
}

export function isEmailHeaderMimeVersionAstNode(
  input: object,
): input is IEmailHeaderMimeVersionAstNode {
  return isAstNode<IEmailHeaderMimeVersionAstNodeType>(input, EmailHeaderMimeVersionAstNodeType);
}
