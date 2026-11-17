import { IEmailBodyAstNode } from './email-body-ast-node.type';
import { serializeEmailBodyGeneric } from './built-in/__generic__/serialize-email-body-generic';
import { isEmailBodyGenericAstNode } from './built-in/__generic__/email-body-generic-ast-node.type';
import { isEmailBodyTextAstNode } from './built-in/text/email-body-text-ast-node.type';
import { serializeEmailBodyText } from './built-in/text/serialize-email-body-text';
import { isEmailBodyMultipartAstNode } from './built-in/multipart/email-body-multipart-ast-node.type';
import { serializeEmailBodyMultipart } from './built-in/multipart/serialize-email-body-multipart';

/** FUNCTION **/

export function serializeEmailBody(
  node: IEmailBodyAstNode,
): string {
  if (isEmailBodyTextAstNode(node)) {
    return serializeEmailBodyText(node);
  } else if (isEmailBodyMultipartAstNode(node)) {
    return serializeEmailBodyMultipart(node);
  } else if (isEmailBodyGenericAstNode(node)) {
    return serializeEmailBodyGeneric(node);
  } else {
    throw new Error(`Unknown type: ${(node as any).__type__}`);
  }
}
