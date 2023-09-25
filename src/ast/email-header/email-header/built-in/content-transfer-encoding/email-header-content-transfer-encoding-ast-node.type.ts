import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';
import { IContentTransferEncoding } from './content-transfer-encoding.type';

/** KEY **/

export const EmailHeaderContentTransferEncodingAstNodeKey = 'Content-Transfer-Encoding';

export type IEmailHeaderContentTransferEncodingAstNodeKey = typeof EmailHeaderContentTransferEncodingAstNodeKey;

/** AST NODE **/

export const EmailHeaderContentTransferEncodingAstNodeType = 'EmailHeaderContentTransferEncoding';

export type IEmailHeaderContentTransferEncodingAstNodeType = typeof EmailHeaderContentTransferEncodingAstNodeType;

export interface IEmailHeaderContentTransferEncodingAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderContentTransferEncodingAstNodeType, IEmailHeaderContentTransferEncodingAstNodeKey> {
  readonly value: IContentTransferEncoding;
}

export function isEmailHeaderContentTransferEncodingAstNode(
  input: object,
): input is IEmailHeaderContentTransferEncodingAstNode {
  return isAstNode<IEmailHeaderContentTransferEncodingAstNodeType>(input, EmailHeaderContentTransferEncodingAstNodeType);
}
