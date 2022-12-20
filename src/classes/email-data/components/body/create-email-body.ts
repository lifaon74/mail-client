import { CRLF } from '../../../../constants/crlf';
import { EMAIL_DATA_MAX_LINE_LENGTH } from '../../misc/line-length-limits';
import { IEmailBody } from './email-body.type';

export function createEmailBody(
  _data: string,
): IEmailBody {

  const getData = (): string => {
    return _data;
  };

  const toString = getData;

  return {
    getData,
    toString,
  };
}

/*-----*/

export function createEmailBodyFromTextAsBase64(
  text: string,
): IEmailBody {
  return createEmailBodyFromBinaryStringAsBase64(
    String.fromCodePoint.apply(null, new TextEncoder().encode(text)),
  );
}

export function createEmailBodyFromBinaryStringAsBase64(
  data: string,
): IEmailBody {
  return createEmailBody(
    btoa(data).replace(new RegExp(`(.{${EMAIL_DATA_MAX_LINE_LENGTH}})`, 'g'), (_, chunk: string) => `${chunk}${CRLF}`),
  );
}

