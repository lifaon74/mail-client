import { IEmailHeaderGenericAstNode, isEmailHeaderGenericAstNode } from './built-in/__generic__/email-header-generic-ast-node.type';
import { IEmailHeaderDateAstNode, isEmailHeaderDateAstNode } from './built-in/date/email-header-date-ast-node.type';
import {
  IEmailHeaderContentTypeAstNode,
  isEmailHeaderContentTypeAstNode,
} from './built-in/content-type/email-header-content-type-ast-node.type';
import { IEmailHeaderFromAstNode, isEmailHeaderFromAstNode } from './built-in/from/email-header-from-ast-node.type';
import { IEmailHeaderBccAstNode, isEmailHeaderBccAstNode } from './built-in/bcc/email-header-bcc-ast-node.type';
import { IEmailHeaderCcAstNode, isEmailHeaderCcAstNode } from './built-in/cc/email-header-cc-ast-node.type';
import {
  IEmailHeaderContentTransferEncodingAstNode,
  isEmailHeaderContentTransferEncodingAstNode,
} from './built-in/content-transfer-encoding/email-header-content-transfer-encoding-ast-node.type';
import { IEmailHeaderInReplyToAstNode, isEmailHeaderInReplyToAstNode } from './built-in/in-reply-to/email-header-in-reply-to-ast-node.type';
import { IEmailHeaderMessageIdAstNode, isEmailHeaderMessageIdAstNode } from './built-in/message-id/email-header-message-id-ast-node.type';
import {
  IEmailHeaderMimeVersionAstNode,
  isEmailHeaderMimeVersionAstNode,
} from './built-in/mime-version/email-header-mime-version-ast-node.type';
import { IEmailHeaderReferencesAstNode, isEmailHeaderReferencesAstNode } from './built-in/references/email-header-references-ast-node.type';
import { IEmailHeaderReplyToAstNode, isEmailHeaderReplyToAstNode } from './built-in/reply-to/email-header-reply-to-ast-node.type';
import { IEmailHeaderSenderAstNode, isEmailHeaderSenderAstNode } from './built-in/sender/email-header-sender-ast-node.type';
import { IEmailHeaderSubjectAstNode, isEmailHeaderSubjectAstNode } from './built-in/subject/email-header-subject-ast-node.type';
import { IEmailHeaderToAstNode, isEmailHeaderToAstNode } from './built-in/to/email-header-to-ast-node.type';

export type IEmailHeaderAstNode =
  | IEmailHeaderBccAstNode
  | IEmailHeaderCcAstNode
  | IEmailHeaderContentTransferEncodingAstNode
  | IEmailHeaderContentTypeAstNode
  | IEmailHeaderDateAstNode
  | IEmailHeaderFromAstNode
  | IEmailHeaderInReplyToAstNode
  | IEmailHeaderMessageIdAstNode
  | IEmailHeaderMimeVersionAstNode
  | IEmailHeaderReferencesAstNode
  | IEmailHeaderReplyToAstNode
  | IEmailHeaderSenderAstNode
  | IEmailHeaderSubjectAstNode
  | IEmailHeaderToAstNode
  | IEmailHeaderGenericAstNode
  ;

export function isEmailHeaderAstNode(
  input: object,
): input is IEmailHeaderAstNode {
  return isEmailHeaderBccAstNode(input)
    || isEmailHeaderCcAstNode(input)
    || isEmailHeaderContentTransferEncodingAstNode(input)
    || isEmailHeaderContentTypeAstNode(input)
    || isEmailHeaderDateAstNode(input)
    || isEmailHeaderFromAstNode(input)
    || isEmailHeaderInReplyToAstNode(input)
    || isEmailHeaderMessageIdAstNode(input)
    || isEmailHeaderMimeVersionAstNode(input)
    || isEmailHeaderReferencesAstNode(input)
    || isEmailHeaderReplyToAstNode(input)
    || isEmailHeaderSenderAstNode(input)
    || isEmailHeaderSubjectAstNode(input)
    || isEmailHeaderToAstNode(input)
    || isEmailHeaderGenericAstNode(input)
    ;
}
