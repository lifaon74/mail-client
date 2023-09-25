import { IEmailBodyGenericAstNode, EmailBodyGenericAstNodeType } from './email-body-generic-ast-node.type';

/** FUNCTION **/

export function parseEmailBodyGeneric(
  value: string,
): IEmailBodyGenericAstNode {
  return {
    __type__: EmailBodyGenericAstNodeType,
    value,
  };
}
