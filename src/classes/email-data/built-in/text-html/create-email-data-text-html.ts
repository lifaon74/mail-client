import { createEmailBodyFromTextAsBase64 } from '../../components/body/create-email-body';
import {
  EMAIL_HEADER_CONTENT_TRANSFER_ENCODING_BASE64_CONSTANT,
} from '../../components/header-list/components/header/built-in/content-transfer-encoding/built-in/email-header.content-transfer-encoding.base64.constant';
import {
  EMAIL_HEADER_CONTENT_TYPE_TEXT_HTML_UTF8_CONSTANT,
} from '../../components/header-list/components/header/built-in/content-type/built-in/email-header.content-type.text-html.utf8.constant';
import { IEmailHeader } from '../../components/header-list/components/header/email-header.type';
import { createEmailHeaderListFromIterable } from '../../components/header-list/create-email-header-list';
import { createEmailData } from '../../create-email-data';
import { IEmailDataTextHTML } from './email-data-text-html.type';

export interface ICreateEmailDataTextHTMLOptions {
  html: string;
  headers?: Iterable<IEmailHeader>;
}

export function createEmailDataTextHTML(
  {
    html: _html,
    headers = [],
  }: ICreateEmailDataTextHTMLOptions,
): IEmailDataTextHTML {
  const parent = createEmailData({
    headers:
      createEmailHeaderListFromIterable([
        ...headers,
        EMAIL_HEADER_CONTENT_TYPE_TEXT_HTML_UTF8_CONSTANT,
        EMAIL_HEADER_CONTENT_TRANSFER_ENCODING_BASE64_CONSTANT,
      ]),
    body: createEmailBodyFromTextAsBase64(_html),
  });

  const getHTML = (): string => {
    return _html;
  };

  return {
    ...parent,
    getHTML,
  };
}
