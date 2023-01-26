import { createEmailHeader } from '../../create-email-header';
import { IEmailHeader } from '../../email-header.type';
import { IContentTransferEncoding } from './content-transfer-encoding.type';
import { IEmailHeaderContentTransferEncoding } from './email-header-content-transfer-encoding.type';
import { HEADER_CONTENT_TRANSFER_ENCODING_KEY_NAME } from './header-content-transfer-encoding-key.contant';

export function createEmailHeaderContentTransferEncoding(
  _contentTransferEncoding: IContentTransferEncoding,
): IEmailHeaderContentTransferEncoding {
  const parent: IEmailHeader = createEmailHeader({
    key: HEADER_CONTENT_TRANSFER_ENCODING_KEY_NAME,
    value: '',
  });

  const getValue = (): string => {
    return _contentTransferEncoding;
  };

  const getContentTransferEncoding = (): IContentTransferEncoding => {
    return _contentTransferEncoding;
  };

  const toString = (): string => {
    return `${parent.getKey()}: ${getValue()}`;
  };

  return {
    ...parent,
    getValue,
    getContentTransferEncoding,
    toString,
  };
}

