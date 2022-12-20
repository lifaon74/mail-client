import { createEmailHeader } from '../../create-email-header';
import { IEmailHeader } from '../../email-header.type';
import { IContentTransferEncoding } from './content-transfer-encoding.type';
import { IEmailHeaderContentTransferEncoding } from './email-header-content-transfer-encoding.type';

export function createEmailHeaderContentTransferEncoding(
  _contentTransferEncoding: IContentTransferEncoding,
): IEmailHeaderContentTransferEncoding {
  const parent: IEmailHeader = createEmailHeader({
    key: 'Content-Transfer-Encoding',
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

