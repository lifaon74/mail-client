import { IEmailHeaderReferencesAstNode, EmailHeaderReferencesAstNodeKey } from './email-header-references-ast-node.type';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';
import { serializeMessageIdList } from '../../../../message-id/message-id-list/serialize-message-id-list';

/** FUNCTION **/

export function serializeEmailHeaderReferences(
  {
    messageIds,
  }: IEmailHeaderReferencesAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    EmailHeaderReferencesAstNodeKey,
    serializeMessageIdList(messageIds),
  );
}
