import { createEmailBodyFromTextAsBase64 } from '../../components/body/built-in/create-email-body-from-text-as-base64';
import {
  EMAIL_HEADER_CONTENT_TRANSFER_ENCODING_BASE64_CONSTANT,
} from '../../components/header-list/components/header/built-in/content-transfer-encoding/built-in/email-header.content-transfer-encoding.base64.constant';
import {
  EMAIL_HEADER_CONTENT_TYPE_TEXT_PLAIN_UTF8_CONSTANT,
} from '../../components/header-list/components/header/built-in/content-type/built-in/email-header.content-type.text-plain.utf8.constant';
import { IEmailHeader } from '../../components/header-list/components/header/email-header.type';
import { createEmailHeaderListFromIterable } from '../../components/header-list/create-email-header-list-from-iterable';
import { createEmailData } from '../../create-email-data';
import { IEmailDataTextPlain } from './email-data-text-plain.type';

export interface ICreateEmailDataTextPlainOptions {
  text: string;
  headers?: Iterable<IEmailHeader>;
}

export function createEmailDataTextPlain_LEGACY(
  {
    text: _text,
    headers = [],
  }: ICreateEmailDataTextPlainOptions,
): IEmailDataTextPlain {
  const parent = createEmailData({
    headers: createEmailHeaderListFromIterable([
      ...headers,
      EMAIL_HEADER_CONTENT_TYPE_TEXT_PLAIN_UTF8_CONSTANT,
      EMAIL_HEADER_CONTENT_TRANSFER_ENCODING_BASE64_CONSTANT,
    ]),
    body: createEmailBodyFromTextAsBase64(_text),
  });

  const getText = (): string => {
    return _text;
  };

  return {
    ...parent,
    getText,
  };
}
