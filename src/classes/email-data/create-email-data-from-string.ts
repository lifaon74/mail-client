import { CRLF } from '../../constants/crlf';
import { createEmailBodyFromString } from './components/body/built-in/create-email-body-from-string';
import {
  IEmailHeaderContentTransferEncoding
} from './components/header-list/components/header/built-in/content-transfer-encoding/email-header-content-transfer-encoding.type';
import {
  HEADER_CONTENT_TRANSFER_ENCODING_KEY_NAME
} from './components/header-list/components/header/built-in/content-transfer-encoding/header-content-transfer-encoding-key.contant';
import { IEmailHeaderContentType } from './components/header-list/components/header/built-in/content-type/email-header-content-type.type';
import {
  HEADER_CONTENT_TYPE_KEY_NAME
} from './components/header-list/components/header/built-in/content-type/header-content-type-key.contant';
import { IEmailHeader } from './components/header-list/components/header/email-header.type';
import { createEmailHeaderListFromString } from './components/header-list/create-email-header-list-from-string';
import { IEmailHeaderList } from './components/header-list/email-header-list.type';
import { createEmailData } from './create-email-data';
import { IEmailData } from './email-data.type';

export function createEmailDataFromString(
  input: string,
): IEmailData {
  const index: number = input.indexOf(CRLF + CRLF);
  const headers: IEmailHeaderList = createEmailHeaderListFromString(input.slice(0, index));

  const contentType: IEmailHeaderContentType | undefined = headers.getItem(HEADER_CONTENT_TYPE_KEY_NAME) as (IEmailHeaderContentType | undefined);
  const contentTransferEncoding: IEmailHeaderContentTransferEncoding | undefined = headers.getItem(HEADER_CONTENT_TRANSFER_ENCODING_KEY_NAME) as (IEmailHeaderContentTransferEncoding | undefined);

  if (contentType !== void 0) {
    if (contentType.getMimeType().getTypeAndSubType() === 'text/plain') {

      if (contentTransferEncoding !== void 0) {
        if (contentTransferEncoding.getContentTransferEncoding() === 'base64') {
          console.log('ok');
        }
      }
    }
  }

  return createEmailData({
    headers,
    body: createEmailBodyFromString(input.slice(index + 4)),
  });
}
