import { createEmailHeaderBccFromValueString } from './built-in/bcc/create-email-header-bcc-from-value-string';
import { HEADER_BCC_KEY_NAME } from './built-in/bcc/header-bcc-key.contant';
import { createEmailHeaderCcFromValueString } from './built-in/cc/create-email-header-cc-from-value-string';
import { HEADER_CC_KEY_NAME } from './built-in/cc/header-cc-key.contant';
import {
  createEmailHeaderContentTransferEncodingFromValueString
} from './built-in/content-transfer-encoding/create-email-header-content-transfer-encoding-from-value-string';
import {
  HEADER_CONTENT_TRANSFER_ENCODING_KEY_NAME
} from './built-in/content-transfer-encoding/header-content-transfer-encoding-key.contant';
import { createEmailHeaderContentTypeFromValueString } from './built-in/content-type/create-email-header-content-type-from-value-string';
import { HEADER_CONTENT_TYPE_KEY_NAME } from './built-in/content-type/header-content-type-key.contant';
import { createEmailHeaderDateFromValueString } from './built-in/date/create-email-header-date-from-value-string';
import { HEADER_DATE_KEY_NAME } from './built-in/date/header-date-key.contant';
import { createEmailHeaderFromFromValueString } from './built-in/from/create-email-header-from-from-value-string';
import { HEADER_FROM_KEY_NAME } from './built-in/from/header-from-key.contant';
import { createEmailHeaderInReplyToFromValueString } from './built-in/in-reply-to/create-email-header-in-reply-to-from-value-string';
import { HEADER_IN_REPLY_TO_KEY_NAME } from './built-in/in-reply-to/header-in-reply-to-key.contant';
import { createEmailHeaderMessageIdFromValueString } from './built-in/message-id/create-email-header-message-id-from-value-string';
import { HEADER_MESSAGE_ID_KEY_NAME } from './built-in/message-id/header-message-id-key.contant';
import { createEmailHeaderMimeVersionFromValueString } from './built-in/mime-version/create-email-header-mime-version-from-value-string';
import { HEADER_MIME_VERSION_KEY_NAME } from './built-in/mime-version/header-mime-version-key.contant';
import { createEmailHeaderReferencesFromValueString } from './built-in/references/create-email-header-references-from-value-string';
import { HEADER_REFERENCES_KEY_NAME } from './built-in/references/header-references-key.contant';
import { createEmailHeaderReplyToFromValueString } from './built-in/reply-to/create-email-header-reply-to-from-value-string';
import { HEADER_REPLY_TO_KEY_NAME } from './built-in/reply-to/header-reply-to-key.contant';
import { createEmailHeaderSenderFromValueString } from './built-in/sender/create-email-header-sender-from-value-string';
import { HEADER_SENDER_KEY_NAME } from './built-in/sender/header-sender-key.contant';
import { createEmailHeaderSubjectFromValueString } from './built-in/subject/create-email-header-subject-from-value-string';
import { HEADER_SUBJECT_KEY_NAME } from './built-in/subject/header-subject-key.contant';
import { createEmailHeaderToFromValueString } from './built-in/to/create-email-header-to-from-value-string';
import { HEADER_TO_KEY_NAME } from './built-in/to/header-to-key.contant';
import { createEmailHeader } from './create-email-header';
import { IEmailHeader } from './email-header.type';

export function createEmailHeaderFromString(
  input: string,
): IEmailHeader {
  const index: number = input.indexOf(': ');
  const key: string = input.slice(0, index);
  const value: string = input.slice(index + 2);

  if (key === HEADER_BCC_KEY_NAME) {
    return createEmailHeaderBccFromValueString(value);
  } else if (key === HEADER_CC_KEY_NAME) {
    return createEmailHeaderCcFromValueString(value);
  } else if (key === HEADER_CONTENT_TRANSFER_ENCODING_KEY_NAME) {
    return createEmailHeaderContentTransferEncodingFromValueString(value);
  } else if (key === HEADER_CONTENT_TYPE_KEY_NAME) {
    return createEmailHeaderContentTypeFromValueString(value);
  } else if (key === HEADER_DATE_KEY_NAME) {
    return createEmailHeaderDateFromValueString(value);
  } else if (key === HEADER_FROM_KEY_NAME) {
    return createEmailHeaderFromFromValueString(value);
  } else if (key === HEADER_IN_REPLY_TO_KEY_NAME) {
    return createEmailHeaderInReplyToFromValueString(value);
  } else if (key === HEADER_MESSAGE_ID_KEY_NAME) {
    return createEmailHeaderMessageIdFromValueString(value);
  } else if (key === HEADER_MIME_VERSION_KEY_NAME) {
    return createEmailHeaderMimeVersionFromValueString(value);
  } else if (key === HEADER_REFERENCES_KEY_NAME) {
    return createEmailHeaderReferencesFromValueString(value);
  } else if (key === HEADER_REPLY_TO_KEY_NAME) {
    return createEmailHeaderReplyToFromValueString(value);
  } else if (key === HEADER_SENDER_KEY_NAME) {
    return createEmailHeaderSenderFromValueString(value);
  } else if (key === HEADER_SUBJECT_KEY_NAME) {
    return createEmailHeaderSubjectFromValueString(value);
  } else if (key === HEADER_TO_KEY_NAME) {
    return createEmailHeaderToFromValueString(value);
  } else {
    return createEmailHeader({
      key,
      value,
    });
  }
}
