import { createMessageIdListFromString } from '../shared/message-id/message-id-list/create-message-id-list-from-string';
import { createEmailHeaderReferences } from './create-email-header-references';
import { IEmailHeaderReferences } from './email-header-references.type';

export function createEmailHeaderReferencesFromValueString(
  input: string,
): IEmailHeaderReferences {
  return createEmailHeaderReferences(
    createMessageIdListFromString(input),
  );
}
