import { IEmailHeaderGenericAstNode, EmailHeaderGenericAstNodeType } from './email-header-generic-ast-node.type';

/** FUNCTION **/

export function parseEmailHeaderGeneric(
  key: string,
  value: string,
): IEmailHeaderGenericAstNode {
  return {
    __type__: EmailHeaderGenericAstNodeType,
    key,
    value,
  };
}
