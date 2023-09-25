import {
  IEmailHeaderReferencesAstNode,
  EmailHeaderReferencesAstNodeType,
  EmailHeaderReferencesAstNodeKey,
} from './email-header-references-ast-node.type';
import { parseMimeType } from '../../../../mime-type/parse-mime-type';
import { parseMessageIdList } from '../../../../message-id/message-id-list/parse-message-id-list';

/** FUNCTION **/

export function parseEmailHeaderReferences(
  input: string,
): IEmailHeaderReferencesAstNode {
  return {
    __type__: EmailHeaderReferencesAstNodeType,
    key: EmailHeaderReferencesAstNodeKey,
    messageIds: parseMessageIdList(input),
  };
}
