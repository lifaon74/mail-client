import { MIME_TYPE_TEXT_PLAIN_UTF8_CONSTANT } from '../../../../../../../../mime-type/built-in/mime-type.text-plain.utf8.constant';
import { createEmailHeaderContentType } from '../create-email-header-content-type';
import { IEmailHeaderContentType } from '../email-header-content-type.type';

export const EMAIL_HEADER_CONTENT_TYPE_TEXT_PLAIN_UTF8_CONSTANT: IEmailHeaderContentType = createEmailHeaderContentType(
  MIME_TYPE_TEXT_PLAIN_UTF8_CONSTANT,
);
