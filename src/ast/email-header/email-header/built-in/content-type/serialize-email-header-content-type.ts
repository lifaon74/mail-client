import { IEmailHeaderContentTypeAstNode, EmailHeaderContentTypeAstNodeKey } from './email-header-content-type-ast-node.type';
import { serializeMimeType } from '../../../../mime-type/serialize-mime-type';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';

/** FUNCTION **/

export function serializeEmailHeaderContentType(
  {
    mimeType,
  }: IEmailHeaderContentTypeAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    EmailHeaderContentTypeAstNodeKey,
    serializeMimeType(mimeType),
  );
}
