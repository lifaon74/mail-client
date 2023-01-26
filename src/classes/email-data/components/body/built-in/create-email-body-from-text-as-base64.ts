import { createEmailBodyFromBinaryStringAsBase64 } from './create-email-body-from-binary-string-as-base64';
import { IEmailBody } from '../email-body.type';

export function createEmailBodyFromTextAsBase64(
  text: string,
): IEmailBody {
  return createEmailBodyFromBinaryStringAsBase64(
    String.fromCodePoint.apply(null, new TextEncoder().encode(text)),
  );
}
