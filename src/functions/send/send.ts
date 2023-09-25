import { IEmailContact } from '../../classes/__old/email-contact/__old/email-contact.type';
import { IEmailDataAttachment } from '../../classes/email-data/__old/built-in/attachment/email-data-attachment.type';
import {
  createEmailDataMultipartAlternativeFromTextAndHTML,
} from '../../classes/email-data/__old/built-in/multipart/built-in/create-email-data-multipart-alternative-from-text-and-html';
import {
  createEmailDataMultipartWithAutogeneratedBoundary,
} from '../../classes/email-data/__old/built-in/multipart/built-in/create-email-data-multipart-with-autogenerated-boundary';
import { createEmailDataTextPlain } from '../../classes/email-data/__old/built-in/text/plain/create-email-data-text-plain';
import {
  createEmailHeaderBcc,
} from '../../classes/email-data/__old/fragments/header-list/fragments/header/built-in/bcc/create-email-header-bcc';
import { createEmailHeaderCc } from '../../classes/email-data/__old/fragments/header-list/fragments/header/built-in/cc/create-email-header-cc';
import {
  createEmailHeaderFrom,
} from '../../classes/email-data/__old/fragments/header-list/fragments/header/built-in/from/create-email-header-from';
import {
  createEmailHeaderInReplyTo,
} from '../../classes/email-data/__old/fragments/header-list/fragments/header/built-in/in-reply-to/create-email-header-in-reply-to';
import {
  createEmailHeaderMessageId,
} from '../../classes/email-data/__old/fragments/header-list/fragments/header/built-in/message-id/create-email-header-message-id';
import {
  createEmailHeaderReferences,
} from '../../classes/email-data/__old/fragments/header-list/fragments/header/built-in/references/create-email-header-references';
import {
  createEmailHeaderReplyTo,
} from '../../classes/email-data/__old/fragments/header-list/fragments/header/built-in/reply-to/create-email-header-reply-to';
import {
  createEmailHeaderSender,
} from '../../classes/email-data/__old/fragments/header-list/fragments/header/built-in/sender/create-email-header-sender';
import {
  createEmailContactList,
} from '../../classes/email-data/__old/fragments/header-list/fragments/header/built-in/shared/email-concat/email-contact-list/create-email-contact-list';
import {
  createMessageIdList,
} from '../../classes/email-data/__old/fragments/header-list/fragments/header/built-in/shared/message-id/message-id-list/create-message-id-list';
import {
  createEmailHeaderSubject,
} from '../../classes/email-data/__old/fragments/header-list/fragments/header/built-in/subject/create-email-header-subject';
import { createEmailHeaderTo } from '../../classes/email-data/__old/fragments/header-list/fragments/header/built-in/to/create-email-header-to';
import { generateMessageIdDomain } from '../../classes/message-id/__old/built-in/domain/create-message-id-domain';
import { IMessageId } from '../../classes/message-id/__old/message-id.type';
import { IOptionalDateLike, optionalDateLikeToDate } from '../like/date/optional-date-like-to-date';
import {
  emailAttachmentListLikeToEmailDataAttachmentArray,
  IEmailAttachmentListLike,
} from '../like/email-attachment-list/email-attachment-list-like-to-email-data-attachment-array';
import {
  emailContactListLikeToEmailContactArray,
  IEmailContactListLike,
} from '../like/email-contact-list/email-contact-list-like-to-email-contact-array';
import { emailContactLikeToEmailContact, IEmailContactLike } from '../like/email-contact/email-contact-like-to-email-contact';
import { IMessageIdListLike, messageIdListLikeToMessageIdArray } from '../like/message-id-list/message-id-list-like-to-message-id-array';
import { IMessageIdLike, messageIdLikeToMessageId } from '../like/message-id/message-id-like-to-message-id';

export interface ICreateEmailDataFromOptionsOptions {
  date?: IOptionalDateLike; // (default: current date)

  from: IEmailContactListLike;
  sender?: IEmailContactLike;
  replyTo?: IEmailContactListLike;

  to: IEmailContactListLike;
  cc?: IEmailContactListLike;
  bcc?: IEmailContactListLike;

  messageId?: IMessageIdLike;
  inReplyTo?: IMessageIdListLike;
  references?: IMessageIdListLike;

  subject: string;

  text: string;
  html?: string | null;
  attachments?: IEmailAttachmentListLike;

  // comments: string; // TODO
  // keywords: any; // TODO
  // TODO resent fields
  // TODO trace fields
  // TODO optional fields
}

export function createEmailDataFromOptions(
  {
    date,
    from,
    sender,
    replyTo,
    to,
    cc,
    bcc,
    messageId,
    inReplyTo,
    references,
    subject,
    text,
    html,
    attachments,
  }: ICreateEmailDataFromOptionsOptions,
): IEmailData {
  /** HEADERS **/

  const headers: IEmailHeader[] = [];

  /* DATE */
  const _date: Date = optionalDateLikeToDate(date);

  headers.push(
    createEmailHeaderDate(_date),
  );

  /* FROM */
  const _from: IEmailContact[] = emailContactListLikeToEmailContactArray(from);

  if (_from.length === 0) {
    throw new Error(`'from' cannot be empty`);
  }

  headers.push(
    createEmailHeaderFrom(
      createEmailContactList(_from),
    ),
  );

  /* SENDER */
  const _sender: IEmailContact = (sender === void 0)
    ? _from[0]
    : emailContactLikeToEmailContact(sender);

  headers.push(
    createEmailHeaderSender(_sender),
  );

  /* REPLY_TO */
  const _replyTo: IEmailContact[] = (replyTo === void 0)
    ? []
    : emailContactListLikeToEmailContactArray(replyTo);

  if (_replyTo.length > 0) {
    headers.push(
      createEmailHeaderReplyTo(
        createEmailContactList(_replyTo),
      ),
    );
  }

  /* TO */
  const _to: IEmailContact[] = emailContactListLikeToEmailContactArray(to);

  if (_to.length === 0) {
    throw new Error(`'to' cannot be empty`);
  }

  headers.push(
    createEmailHeaderTo(
      createEmailContactList(_to),
    ),
  );

  /* CC */
  const _cc: IEmailContact[] = (cc === void 0)
    ? []
    : emailContactListLikeToEmailContactArray(cc);

  if (_cc.length > 0) {
    headers.push(
      createEmailHeaderCc(
        createEmailContactList(_cc),
      ),
    );
  }

  /* BCC */
  const _bcc: IEmailContact[] = (bcc === void 0)
    ? []
    : emailContactListLikeToEmailContactArray(bcc);

  if (_bcc.length > 0) {
    headers.push(
      createEmailHeaderBcc(
        createEmailContactList(_bcc),
      ),
    );
  }

  /* MESSAGE_ID */
  const _messageId: IMessageId = (messageId === void 0)
    ? generateMessageIdDomain({
      domain: _sender.getAddress().getDomain(),
    })
    : messageIdLikeToMessageId(messageId);

  headers.push(
    createEmailHeaderMessageId(_messageId),
  );

  /* IN_REPLY_TO */
  const _inReplyTo: IMessageId[] = (inReplyTo === void 0)
    ? []
    : messageIdListLikeToMessageIdArray(inReplyTo);

  if (_inReplyTo.length > 0) {
    headers.push(
      createEmailHeaderInReplyTo(
        createMessageIdList(_inReplyTo),
      ),
    );
  }

  /* REFERENCES */
  const _references: IMessageId[] = (references === void 0)
    ? []
    : messageIdListLikeToMessageIdArray(references);

  if (_references.length > 0) {
    headers.push(
      createEmailHeaderReferences(
        createMessageIdList(_references),
      ),
    );
  }

  /* SUBJECT */
  headers.push(
    createEmailHeaderSubject(subject),
  );

  /** EMAIL DATA **/

  /* HTML */
  const _html: string | null = (html === void 0)
    ? null
    : html;

  /* ATTACHMENTS */
  const _attachments: IEmailDataAttachment[] = (attachments === void 0)
    ? []
    : emailAttachmentListLikeToEmailDataAttachmentArray(attachments);

  /* MERGE */

  if (_html === null) {
    if (_attachments.length === 0) { // text only
      return createEmailDataTextPlain({
        text,
        headers,
      });
    } else { // text & attachments
      return createEmailDataMultipartWithAutogeneratedBoundary({
        content: [
          createEmailDataTextPlain({
            text,
          }),
          ..._attachments,
        ],
        mimeTypeSubtype: 'mixed',
        headers,
      });
    }
  } else {
    if (_attachments.length === 0) { // text & html
      return createEmailDataMultipartAlternativeFromTextAndHTML({
        text,
        html: _html,
        headers,
      });
    } else { // html, text & attachments
      return createEmailDataMultipartWithAutogeneratedBoundary({
        content: [
          createEmailDataMultipartAlternativeFromTextAndHTML({
            text,
            html: _html,
          }),
          ..._attachments,
        ],
        mimeTypeSubtype: 'mixed',
        headers,
      });
    }
  }
}


