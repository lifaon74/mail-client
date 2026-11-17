import { IEmailBodyGenericAstNode } from './built-in/__generic__/email-body-generic-ast-node.type';
import { IEmailBodyTextAstNode } from './built-in/text/email-body-text-ast-node.type';
import { IEmailBodyMultipartAstNode } from './built-in/multipart/email-body-multipart-ast-node.type';

export type IEmailBodyAstNode =
  | IEmailBodyTextAstNode
  | IEmailBodyMultipartAstNode
  | IEmailBodyGenericAstNode
  ;

