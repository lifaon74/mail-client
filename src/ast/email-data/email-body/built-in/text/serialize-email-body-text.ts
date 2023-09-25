import { IEmailBodyTextAstNode } from './email-body-text-ast-node.type';
import { CRLF } from '../../../../../constants/crlf';
import { EMAIL_DATA_MAX_LINE_LENGTH } from '../../../../../classes/email-data/misc/line-length-limits';

/** FUNCTION **/

export function serializeEmailBodyText(
  {
    charset,
    encoding,
    value,
  }: IEmailBodyTextAstNode,
): string {
  // TODO support various encodings and charsets

  if (
    (encoding === '7bit')
    || (encoding === '8bit')
    || (encoding === 'binary')
  ) {
    // TODO support multiline
    return value;
  } else if (encoding === 'quoted-printable') {
    throw 'TODO'; // TODO
  } else if (encoding === 'base64') {
    return btoa(value)
      .replace(
        new RegExp(`(.{${EMAIL_DATA_MAX_LINE_LENGTH}})`, 'g'),
        (_, chunk: string): string => (chunk + CRLF),
      );
  } else {
    throw new Error(`Unknown encoding: ${encoding}`);
  }
}
