import { IEmailHeaderGenericAstNode } from './email-header-generic-ast-node.type';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';

/** FUNCTION **/

export function serializeEmailHeaderGeneric(
  {
    key,
    value,
  }: IEmailHeaderGenericAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    key,
    value,
  );
}
