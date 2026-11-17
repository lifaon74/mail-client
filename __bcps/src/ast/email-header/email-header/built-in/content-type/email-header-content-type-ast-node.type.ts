import { IMimeTypeAstNode } from '../../../../mime-type/mime-type-ast-node.type';
import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';

/** KEY **/

export const EmailHeaderContentTypeAstNodeKey = 'Content-Type';

export type IEmailHeaderContentTypeAstNodeKey = typeof EmailHeaderContentTypeAstNodeKey;

/** AST NODE **/

export const EmailHeaderContentTypeAstNodeType = 'EmailHeaderContentType';

export type IEmailHeaderContentTypeAstNodeType = typeof EmailHeaderContentTypeAstNodeType;

export interface IEmailHeaderContentTypeAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderContentTypeAstNodeType, IEmailHeaderContentTypeAstNodeKey> {
  readonly mimeType: IMimeTypeAstNode;
}


export function isEmailHeaderContentTypeAstNode(
  input: object,
): input is IEmailHeaderContentTypeAstNode {
  return isAstNode<IEmailHeaderContentTypeAstNodeType>(input, EmailHeaderContentTypeAstNodeType);
}
