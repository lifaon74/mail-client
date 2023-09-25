import { IEmailHeaderAstNode } from './email-header-ast-node.type';
import { isEmailHeaderGenericAstNode } from './built-in/__generic__/email-header-generic-ast-node.type';
import { serializeEmailHeaderGeneric } from './built-in/__generic__/serialize-email-header-generic';
import { isEmailHeaderDateAstNode } from './built-in/date/email-header-date-ast-node.type';
import { serializeEmailHeaderDate } from './built-in/date/serialize-email-header-date';
import { isEmailHeaderContentTypeAstNode } from './built-in/content-type/email-header-content-type-ast-node.type';
import { serializeEmailHeaderContentType } from './built-in/content-type/serialize-email-header-content-type';
import { isEmailHeaderFromAstNode } from './built-in/from/email-header-from-ast-node.type';
import { serializeEmailHeaderFrom } from './built-in/from/serialize-email-header-from';
import { isEmailHeaderBccAstNode } from './built-in/bcc/email-header-bcc-ast-node.type';
import { serializeEmailHeaderBcc } from './built-in/bcc/serialize-email-header-bcc';
import { isEmailHeaderCcAstNode } from './built-in/cc/email-header-cc-ast-node.type';
import { serializeEmailHeaderCc } from './built-in/cc/serialize-email-header-cc';
import {
  isEmailHeaderContentTransferEncodingAstNode,
} from './built-in/content-transfer-encoding/email-header-content-transfer-encoding-ast-node.type';
import {
  serializeEmailHeaderContentTransferEncoding,
} from './built-in/content-transfer-encoding/serialize-email-header-content-transfer-encoding';
import { isEmailHeaderInReplyToAstNode } from './built-in/in-reply-to/email-header-in-reply-to-ast-node.type';
import { serializeEmailHeaderInReplyTo } from './built-in/in-reply-to/serialize-email-header-in-reply-to';
import { isEmailHeaderMessageIdAstNode } from './built-in/message-id/email-header-message-id-ast-node.type';
import { serializeEmailHeaderMessageId } from './built-in/message-id/serialize-email-header-message-id';
import { isEmailHeaderMimeVersionAstNode } from './built-in/mime-version/email-header-mime-version-ast-node.type';
import { serializeEmailHeaderMimeVersion } from './built-in/mime-version/serialize-email-header-mime-version';
import { serializeEmailHeaderReferences } from './built-in/references/serialize-email-header-references';
import { isEmailHeaderReferencesAstNode } from './built-in/references/email-header-references-ast-node.type';
import { isEmailHeaderReplyToAstNode } from './built-in/reply-to/email-header-reply-to-ast-node.type';
import { serializeEmailHeaderReplyTo } from './built-in/reply-to/serialize-email-header-reply-to';
import { serializeEmailHeaderSender } from './built-in/sender/serialize-email-header-sender';
import { isEmailHeaderSenderAstNode } from './built-in/sender/email-header-sender-ast-node.type';
import { serializeEmailHeaderSubject } from './built-in/subject/serialize-email-header-subject';
import { isEmailHeaderSubjectAstNode } from './built-in/subject/email-header-subject-ast-node.type';
import { serializeEmailHeaderTo } from './built-in/to/serialize-email-header-to';
import { isEmailHeaderToAstNode } from './built-in/to/email-header-to-ast-node.type';

/** FUNCTION **/

export function serializeEmailHeader(
  node: IEmailHeaderAstNode,
): string {
  if (isEmailHeaderBccAstNode(node)) {
    return serializeEmailHeaderBcc(node);
  } else if (isEmailHeaderCcAstNode(node)) {
    return serializeEmailHeaderCc(node);
  } else if (isEmailHeaderContentTransferEncodingAstNode(node)) {
    return serializeEmailHeaderContentTransferEncoding(node);
  } else if (isEmailHeaderContentTypeAstNode(node)) {
    return serializeEmailHeaderContentType(node);
  } else if (isEmailHeaderDateAstNode(node)) {
    return serializeEmailHeaderDate(node);
  } else if (isEmailHeaderFromAstNode(node)) {
    return serializeEmailHeaderFrom(node);
  } else if (isEmailHeaderInReplyToAstNode(node)) {
    return serializeEmailHeaderInReplyTo(node);
  } else if (isEmailHeaderMessageIdAstNode(node)) {
    return serializeEmailHeaderMessageId(node);
  } else if (isEmailHeaderMimeVersionAstNode(node)) {
    return serializeEmailHeaderMimeVersion(node);
  } else if (isEmailHeaderReferencesAstNode(node)) {
    return serializeEmailHeaderReferences(node);
  } else if (isEmailHeaderReplyToAstNode(node)) {
    return serializeEmailHeaderReplyTo(node);
  } else if (isEmailHeaderSenderAstNode(node)) {
    return serializeEmailHeaderSender(node);
  } else if (isEmailHeaderSubjectAstNode(node)) {
    return serializeEmailHeaderSubject(node);
  } else if (isEmailHeaderToAstNode(node)) {
    return serializeEmailHeaderTo(node);
  } else if (isEmailHeaderGenericAstNode(node)) {
    return serializeEmailHeaderGeneric(node);
  } else {
    throw new Error(`Unknown type: ${(node as any).__type__}`);
  }
}
