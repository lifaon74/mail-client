import { IEmailHeaderMimeVersionAstNode, EmailHeaderMimeVersionAstNodeKey } from './email-header-mime-version-ast-node.type';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';

/** FUNCTION **/

export function serializeEmailHeaderMimeVersion(
  {
    version,
  }: IEmailHeaderMimeVersionAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    EmailHeaderMimeVersionAstNodeKey,
    version.toFixed(1),
  );
}
