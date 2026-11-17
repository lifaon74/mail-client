import { IEmailHeaderAstNode } from '../email-header-ast-node.type';
import {  parseEmailHeaderGeneric } from '../built-in/__generic__/parse-email-header-generic';
import { parseEmailHeaderContentType } from '../built-in/content-type/parse-email-header-content-type';
import { parseEmailHeaderFrom } from '../built-in/from/parse-email-header-from';
import { parseEmailHeaderDate } from '../built-in/date/parse-email-header-date';
import { EmailHeaderDateAstNodeKey } from '../built-in/date/email-header-date-ast-node.type';
import { EmailHeaderContentTypeAstNodeKey } from '../built-in/content-type/email-header-content-type-ast-node.type';
import { EmailHeaderFromAstNodeKey } from '../built-in/from/email-header-from-ast-node.type';
import { parseEmailHeaderBcc } from '../built-in/bcc/parse-email-header-bcc';
import { EmailHeaderBccAstNodeKey } from '../built-in/bcc/email-header-bcc-ast-node.type';
import { parseEmailHeaderCc } from '../built-in/cc/parse-email-header-cc';
import { EmailHeaderCcAstNodeKey } from '../built-in/cc/email-header-cc-ast-node.type';
import {
  EmailHeaderContentTransferEncodingAstNodeKey
} from '../built-in/content-transfer-encoding/email-header-content-transfer-encoding-ast-node.type';
import {
  parseEmailHeaderContentTransferEncoding
} from '../built-in/content-transfer-encoding/parse-email-header-content-transfer-encoding';
import { EmailHeaderInReplyToAstNodeKey } from '../built-in/in-reply-to/email-header-in-reply-to-ast-node.type';
import { parseEmailHeaderInReplyTo } from '../built-in/in-reply-to/parse-email-header-in-reply-to';
import { EmailHeaderMessageIdAstNodeKey } from '../built-in/message-id/email-header-message-id-ast-node.type';
import { parseEmailHeaderMessageId } from '../built-in/message-id/parse-email-header-message-id';
import { EmailHeaderMimeVersionAstNodeKey } from '../built-in/mime-version/email-header-mime-version-ast-node.type';
import { parseEmailHeaderMimeVersion } from '../built-in/mime-version/parse-email-header-mime-version';
import { EmailHeaderReferencesAstNodeKey } from '../built-in/references/email-header-references-ast-node.type';
import { parseEmailHeaderReferences } from '../built-in/references/parse-email-header-references';
import { EmailHeaderReplyToAstNodeKey } from '../built-in/reply-to/email-header-reply-to-ast-node.type';
import { parseEmailHeaderReplyTo } from '../built-in/reply-to/parse-email-header-reply-to';
import { EmailHeaderSenderAstNodeKey } from '../built-in/sender/email-header-sender-ast-node.type';
import { parseEmailHeaderSender } from '../built-in/sender/parse-email-header-sender';
import { EmailHeaderSubjectAstNodeKey } from '../built-in/subject/email-header-subject-ast-node.type';
import { parseEmailHeaderSubject } from '../built-in/subject/parse-email-header-subject';
import { parseEmailHeaderTo } from '../built-in/to/parse-email-header-to';
import { EmailHeaderToAstNodeKey } from '../built-in/to/email-header-to-ast-node.type';

/** FUNCTION **/

export function parseEmailHeaderFromKeyValueStrings(
  key: string,
  value: string,
): IEmailHeaderAstNode {
  if (key === EmailHeaderBccAstNodeKey) {
    return parseEmailHeaderBcc(value);
  } else if (key === EmailHeaderCcAstNodeKey) {
    return parseEmailHeaderCc(value);
  } else if (key === EmailHeaderContentTransferEncodingAstNodeKey) {
    return parseEmailHeaderContentTransferEncoding(value);
  } else if (key === EmailHeaderContentTypeAstNodeKey) {
    return parseEmailHeaderContentType(value);
  } else if (key === EmailHeaderDateAstNodeKey) {
    return parseEmailHeaderDate(value);
  } else if (key === EmailHeaderFromAstNodeKey) {
    return parseEmailHeaderFrom(value);
  } else if (key === EmailHeaderInReplyToAstNodeKey) {
    return parseEmailHeaderInReplyTo(value);
  } else if (key === EmailHeaderMessageIdAstNodeKey) {
    return parseEmailHeaderMessageId(value);
  } else if (key === EmailHeaderMimeVersionAstNodeKey) {
    return parseEmailHeaderMimeVersion(value);
  } else if (key === EmailHeaderReferencesAstNodeKey) {
    return parseEmailHeaderReferences(value);
  } else if (key === EmailHeaderReplyToAstNodeKey) {
    return parseEmailHeaderReplyTo(value);
  } else if (key === EmailHeaderSenderAstNodeKey) {
    return parseEmailHeaderSender(value);
  } else if (key === EmailHeaderSubjectAstNodeKey) {
    return parseEmailHeaderSubject(value);
  } else if (key === EmailHeaderToAstNodeKey) {
    return parseEmailHeaderTo(value);
  } else {
    return parseEmailHeaderGeneric(key, value);
  }
}
