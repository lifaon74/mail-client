import { CRLF } from '../../../../../constants/crlf';
import { EMAIL_DATA_MAX_LINE_LENGTH } from '../../../misc/line-length-limits';
import { createEmailBody } from '../create-email-body';
import { IEmailBody } from '../email-body.type';

export function createEmailBodyFromBinaryStringAsBase64(
  data: string,
): IEmailBody {
  return createEmailBody(
    btoa(data).replace(new RegExp(`(.{${EMAIL_DATA_MAX_LINE_LENGTH}})`, 'g'), (_, chunk: string) => `${chunk}${CRLF}`),
  );
}
