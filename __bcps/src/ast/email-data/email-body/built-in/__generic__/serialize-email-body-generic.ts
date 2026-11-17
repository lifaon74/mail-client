import { IEmailBodyGenericAstNode } from './email-body-generic-ast-node.type';

/** FUNCTION **/

export function serializeEmailBodyGeneric(
  {
    value,
  }: IEmailBodyGenericAstNode,
): string {
  return value;
}
