import { createEmailHeaderContentTransferEncoding } from './create-email-header-content-transfer-encoding';
import { IEmailHeaderContentTransferEncoding } from './email-header-content-transfer-encoding.type';

export function createEmailHeaderContentTransferEncodingFromValueString(
  input: string,
): IEmailHeaderContentTransferEncoding {
  return createEmailHeaderContentTransferEncoding(
    input,
  );
}
