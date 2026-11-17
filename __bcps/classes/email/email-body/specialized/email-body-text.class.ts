import { IContentTransferEncoding, IMFHeaders } from '../../email-headers/email-headers.class';
import { CRLF } from '../../../../constants/crlf';
import { EmailBody } from '../email-body.class';

export interface IEmailBodyTextToStringOptions {
  readonly charset?: string; // TODO
  readonly contentTransferEncoding: IContentTransferEncoding;
}

export interface IEmailBodyTextParseOptions {
  readonly contentTransferEncoding: IContentTransferEncoding;
  readonly charset?: string,
}

export class EmailBodyText extends EmailBody {
  static parse(
    input: string,
    {
      contentTransferEncoding,
      charset = 'utf-8',
    }: IEmailBodyTextParseOptions,
  ): EmailBodyText {
    let text: string;

    if (
      (contentTransferEncoding === '7bit')
      || (contentTransferEncoding === '8bit')
      || (contentTransferEncoding === 'binary')
    ) {
      // TODO support multiline
      text = input;
    } else if (contentTransferEncoding === 'quoted-printable') {
      // TODO decoder using Uint8Array
      text = input
        // rule #5 - soft line break
        .replace(
          new RegExp(`=${CRLF}`, 'g'),
          '',
        )
        // rule #1 - 8-bit representation
        .replace(
          new RegExp(`=([0-9A-Fa-f][0-9A-Fa-f])`, 'g'),
          (_, hex: string): string => {
            const code: number = parseInt(hex, 16);
            return String.fromCodePoint(code);
          },
        )
        // rule #3
        .split(CRLF)
        .map((chunk: string): string => {
          return chunk.trimEnd();
        })
        .join('\n');
    } else if (contentTransferEncoding === 'base64') {
      text = atob(input.replace(new RegExp(CRLF, 'g'), ''));
    } else {
      throw new Error(`Unknown contentTransferEncoding: ${contentTransferEncoding}`);
    }

    charset = normalizeCharset(charset);

    if (charset !== 'utf-8') {
      throw new Error(`Unsupported charset: ${charset}.`); // TODO support more
      // value = new TextDecoder(charset, { fatal: true }).decode(new Uint8Array(String.from));
    }

    return new EmailBodyText(text);
  }

  text: string;

  constructor(
    text: string,
  ) {
    super();
    this.text = text;
  }

  toString(
    {
      charset,
      contentTransferEncoding,
    }: IEmailBodyTextToStringOptions | IMFHeaders,
  ): string {
    if (
      (contentTransferEncoding === '7bit')
      || (contentTransferEncoding === '8bit')
      || (contentTransferEncoding === 'binary')
    ) {
      // TODO support multiline
      return this.text;
    } else if (contentTransferEncoding === 'quoted-printable') {
      throw 'TODO'; // TODO
    } else if (contentTransferEncoding === 'base64') {
      return btoa(this.text)
        .replace(
          // new RegExp(`(.{${EMAIL_DATA_MAX_LINE_LENGTH}})`, 'g'),
          new RegExp(`(.{78})`, 'g'),
          (_, chunk: string): string => (chunk + CRLF),
        );
    } else {
      throw new Error(`Unknown encoding: ${contentTransferEncoding}`);
    }
  }
}

export function normalizeCharset(
  charset: string,
): string {
  return new TextDecoder(charset).encoding;
}


