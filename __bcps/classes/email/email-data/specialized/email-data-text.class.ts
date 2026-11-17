import { IEmailBody } from '../../email-body/email-body.type';
import { IMFHeaders, IContentTransferEncoding } from '../../email-headers/email-headers.class';
import { EmailBodyText } from '../../email-body/specialized/email-body-text.class';
import { MIMEType } from '../../../mime-type/mime-type.class';
import { CONTENT_TYPE_HEADER_NAME } from '../../email-headers/email-header/built-in/content-type/content-type-header-name.constant';
import {
  CONTENT_TRANSFER_ENCODING_HEADER_NAME,
} from '../../email-headers/well-known/content-transfer-encoding-header-name/content-transfer-encoding-header-name.constant';
import { CRLF, CRLF_LENGTH } from '../../../../constants/crlf';
import { EmailBodyMultipart } from '../../email-body/specialized/email-body-multipart.class';
import { normalizeCharset } from './email-body-text.class';
import { EmailData } from '../email-data.class';

/** CLASS **/

export class EmailDataText extends EmailData {
  static parse(
    input: string,
  ): EmailData {
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

  // static #parseBody(
  //   input: string,
  //   headers: EmailHeaders,
  // ): IEmailBody {
  //   const contentType: MIMEType | undefined = headers.getContentType();
  //
  //   if (contentType === void 0) {
  //     throw new Error(`Missing ${CONTENT_TYPE_HEADER_NAME} header.`);
  //   } else {
  //     const type: string = contentType!.type;
  //
  //     if (type === 'text') {
  //       const contentTransferEncoding: IContentTransferEncoding | undefined = headers.getContentTransferEncoding();
  //
  //       if (contentTransferEncoding === void 0) {
  //         throw new Error(`Missing ${CONTENT_TRANSFER_ENCODING_HEADER_NAME} header.`);
  //       } else {
  //         return EmailBodyText.parse(input, {
  //           contentTransferEncoding,
  //           // TODO charset
  //         });
  //       }
  //     } else if (type === 'multipart') {
  //       const boundary: string | undefined = contentType!.parameters.get('boundary');
  //       if (boundary === void 0) {
  //         throw new Error(`Found EmailBodyMultipart - expected ${CONTENT_TYPE_HEADER_NAME} with parameter "boundary".`);
  //       } else {
  //         return EmailBodyMultipart.parse(input, {
  //           boundary,
  //         });
  //       }
  //     } else {
  //       throw new Error(`Unknown type: ${type}`); // TODO generic
  //     }
  //   }
  // }

  readonly #text: string;

  constructor(
    headers: IMFHeaders,
    text: string,
  ) {
    headers.lock(CONTENT_TYPE_HEADER_NAME);

    super(
      headers,
      (): string => {
        const contentTransferEncoding: IContentTransferEncoding = this.contentTransferEncoding;
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
      });

    this.#text = text;
  }

  get text(): string {
    return this.#text;
  }

  get contentTransferEncoding(): IContentTransferEncoding {
    const contentTransferEncoding: IContentTransferEncoding | null = this.headers.getContentTransferEncoding;

    if ()
    return this.headers.getContentTransferEncoding()!;
  }

  // #bodyToString(): string {
  //   const contentType: MIMEType | undefined = this.headers.getContentType();
  //
  //   if (contentType === void 0) {
  //     throw new Error(`Missing ${CONTENT_TYPE_HEADER_NAME} header.`);
  //   } else {
  //     const type: string = contentType!.type;
  //
  //     if (this.body instanceof EmailBodyText) {
  //       if (type === 'text') {
  //         const contentTransferEncoding: IContentTransferEncoding | undefined = this.headers.getContentTransferEncoding();
  //
  //         if (contentTransferEncoding === void 0) {
  //           throw new Error(`Missing ${CONTENT_TRANSFER_ENCODING_HEADER_NAME} header.`);
  //         } else {
  //           return this.body.toString({
  //             contentTransferEncoding,
  //           });
  //         }
  //       } else {
  //         throw new Error(`Found EmailBodyText - expected ${CONTENT_TYPE_HEADER_NAME} with type "text".`);
  //       }
  //     } else if (this.body instanceof EmailBodyMultipart) {
  //       if (type === 'multipart') {
  //         const boundary: string | undefined = contentType!.parameters.get('boundary');
  //         if (boundary === void 0) {
  //           throw new Error(`Found EmailBodyMultipart - expected ${CONTENT_TYPE_HEADER_NAME} with parameter "boundary".`);
  //         } else {
  //           return this.body.toString({
  //             boundary,
  //           });
  //         }
  //       } else {
  //         throw new Error(`Found EmailBodyMultipart - expected ${CONTENT_TYPE_HEADER_NAME} with type "multipart".`);
  //       }
  //     } else {
  //       throw new Error(`Unknown body type.`);
  //     }
  //   }
  // }
}


