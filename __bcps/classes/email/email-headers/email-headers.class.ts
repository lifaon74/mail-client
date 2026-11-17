import { MIMEType } from '../../mime-type/mime-type.class';
import { convertEmailDataDateHeaderToDate } from './well-known/date/functions/convert-email-data-date-header-to-date';
import { formatDateToEmailDataDateHeader } from './well-known/date/functions/format-date-to-email-data-date-header';
import { MIME_VERSION_HEADER_NAME } from './well-known/mime-version/mime-version-header-name.constant';
import { DATE_HEADER_NAME } from './well-known/date/date-header-name.constant';
import { IWellKnownEmailHeaderNames } from './well-known/well-known-email-header-names.type';
import { CONTENT_TYPE_HEADER_NAME } from './email-header/built-in/content-type/content-type-header-name.constant';
import {
  CONTENT_TRANSFER_ENCODING_HEADER_NAME,
} from './well-known/content-transfer-encoding-header-name/content-transfer-encoding-header-name.constant';
import { CRLF } from '../../../constants/crlf';
import { IMFHeader } from './email-header/imf-header.class';

/*
DOC:

- Common Internet Message Headers: https://datatracker.ietf.org/doc/html/rfc2076
- Multipurpose Internet Mail Extensions (MIME),
Part One: Format of Internet Message Bodies
https://datatracker.ietf.org/doc/html/rfc2045


 */

/** TYPES **/

export type IEmailHeaderKey =
  | IWellKnownEmailHeaderNames
  | string
  ;

export type IEmailHeaderTuple = readonly [
  key: IEmailHeaderKey,
  value: string,
];

export type IEmailHeaderLockMode =
  | 'set'
  | 'delete'
  ;

export type IClassicContentTransferEncoding =
  | '7bit'
  | '8bit'
  | 'binary'
  | 'quoted-printable'
  | 'base64'
  ;

export type IContentTransferEncoding =
  | IClassicContentTransferEncoding
  | string
  ;



/** CLASS **/

export class IMFHeaders {
  static parse(
    input: string,
  ): IMFHeaders {
    const rawHeaders: string[] = [];

    const appendLine = (
      line: string,
    ): void => {
      if (
        line.startsWith(' ')
        || line.startsWith('\t')
      ) {
        if (rawHeaders.length === 0) {
          throw new Error(`Not an header list`);
        } else {
          rawHeaders[rawHeaders.length - 1] += line;
        }
      } else {
        rawHeaders.push(line);
      }
    };

    let position: number = 0;

    while (true) {
      const index: number = input.indexOf(CRLF, position);
      if (index === -1) {
        appendLine(input.slice(position));
        break;
      } else {
        appendLine(input.slice(position, index));
        position = index + 2;
      }
    }

    const emailHeaders = new IMFHeaders();

    for (let i = 0, l = rawHeaders.length; i < l; i++) {
      const header: string = rawHeaders[i];
      const index: number = header.indexOf(': ');

      // TODO improve parsing
      if (index === -1) {
        if (header.endsWith(':')) { // empty header
          emailHeaders.set(
            header.slice(0, -1),
            '',
          );
        } else {
          throw new Error(`Invalid email header: ${JSON.stringify(header)}`);
        }
      } else {
        emailHeaders.set(
          header.slice(0, index),
          header.slice(index + 2),
        );
      }
    }

    return emailHeaders;
  }

  readonly #locked: Map<string, IEmailHeaderLockMode>;
  readonly #headers: Map<string, IMFHeader>;

  constructor(
    input: Iterable<IEmailHeaderTuple> = [],
  ) {
    if (input instanceof IMFHeaders) {
      this.#headers = new Map<string, IMFHeader>(input.#headers);
    } else {
      this.#headers = new Map<string, IMFHeader>();

      const iterator: Iterator<IEmailHeaderTuple> = input[Symbol.iterator]();
      let result: IteratorResult<IEmailHeaderTuple>;
      while (!(result = iterator.next()).done) {
        this.set(
          result[0],
          result[1],
        );
      }
    }

    this.#locked = new Map<string, IEmailHeaderLockMode>();
  }

  /** ARRAY **/

  get locked(): ReadonlyMap<string, IEmailHeaderLockMode> {
    return this.#locked;
  }

  lock(
    key: string,
    mode: IEmailHeaderLockMode,
  ): this {
    if (mode === 'delete') {
      if (this.#locked.get(key) === 'set') {
        throw new Error(`Cannot set 'delete' lock mode has a 'set' lock mode is already existing for this header name.`);
      } else if (!this.#headers.has(key)) {

      }
    }

    this.#locked.add(keys[i]);
    return this;
  }

  /** ARRAY **/



  /** MAP **/

  get size(): number {
    return this.#headers.size;
  }

  has(
    key: IEmailHeaderKey,
  ): boolean {
    return this.#headers.has(key);
  }

  get(
    key: IEmailHeaderKey,
  ): string | undefined {
    return this.#headers.get(key);
  }

  set(
    key: IEmailHeaderKey,
    value: string,
  ): this {
    if (key === MIME_VERSION_HEADER_NAME) {
      this.setMIMEVersion(value);
    } else if (key === CONTENT_TYPE_HEADER_NAME) {
      this.setContentType(value);
    } else if (key === CONTENT_TRANSFER_ENCODING_HEADER_NAME) {
      this.setContentTransferEncoding(value);
    } else if (key === DATE_HEADER_NAME) {
      this.setDate(value);
    } else {
      this.#set(key, value);
    }
    return this;
  }

  #set(
    key: IEmailHeaderKey,
    value: string | undefined,
  ): void {
    if (this.isLocked(key)) {
      throw new Error(`Header ${JSON.stringify(key)} is locked.`);
    } else {
      this.#headers.set(key, value);
    }
  }

  #setSpecializedHeader(
    key: IEmailHeaderKey,
    specializedHeader: any,
    value: string,
  ): void {
    this.#set(key, value);
    this.#specializedHeaders.set(key, specializedHeader);
  }

  delete(
    key: IEmailHeaderKey,
  ): boolean {
    this.#specializedHeaders.delete(key);
    return this.#headers.delete(key);
  }

  clear(): void {
    this.#headers.clear();
    this.#specializedHeaders.clear();
  }

  keys(): IterableIterator<string> {
    return this.#headers.keys();
  }

  values(): IterableIterator<string> {
    return this.#headers.values();
  }

  entries(): IterableIterator<IEmailHeaderTuple> {
    return this.#headers.entries();
  }

  [Symbol.iterator](): IterableIterator<IEmailHeaderTuple> {
    return this.entries();
  }

  toString(): string {
    let output: string = '';

    const iterator: Iterator<IEmailHeaderTuple> = this.entries();
    let result: IteratorResult<IEmailHeaderTuple>;
    while (!(result = iterator.next()).done) {
      const [key, value]: IEmailHeaderTuple = result.value;

      if (output !== '') {
        output += CRLF;
      }

      output += `${key}: ${value}`;
    }

    return output;
  }

  /** BUILT-IN **/

  /* MIME-Version */

  getMIMEVersion(): number | undefined {
    return this.#specializedHeaders.get(MIME_VERSION_HEADER_NAME);
  }

  setMIMEVersion(
    input: number | string | undefined,
  ): this {
    if (input === void 0) {
      this.delete(MIME_VERSION_HEADER_NAME);
    } else if (typeof input === 'string') {
      this.setMIMEVersion(Number(input));
    } else {
      if (input !== 1) {
        throw new Error(`Version ${input!.toFixed(1)} not supported.`);
      }
      this.#setSpecializedHeader(MIME_VERSION_HEADER_NAME, input, input.toFixed(1));
    }

    return this;
  }

  /* Content-Type */

  getContentType(): MIMEType | undefined {
    return this.#specializedHeaders.get(CONTENT_TYPE_HEADER_NAME);
  }

  setContentType(
    input: MIMEType | string | undefined,
  ): this {
    if (input === void 0) {
      this.delete(CONTENT_TYPE_HEADER_NAME);
    } else if (typeof input === 'string') {
      this.setContentType(new MIMEType(input));
    } else {
      this.#setSpecializedHeader(
        CONTENT_TYPE_HEADER_NAME,
        input,
        input.toString(),
      );
    }

    return this;
  }

  /* Content-Transfer-Encoding */

  getContentTransferEncoding(): IContentTransferEncoding | undefined {
    return this.#specializedHeaders.get(CONTENT_TRANSFER_ENCODING_HEADER_NAME);
  }

  setContentTransferEncoding(
    input: IContentTransferEncoding | undefined,
  ): this {
    if (input === void 0) {
      this.delete(CONTENT_TRANSFER_ENCODING_HEADER_NAME);
    } else {
      input = input!.toLowerCase();
      if (
        (input === '7bit')
        || (input === '8bit')
        || (input === 'binary')
        || (input === 'quoted-printable')
        || (input === 'base64')
      ) {
        this.#setSpecializedHeader(
          CONTENT_TRANSFER_ENCODING_HEADER_NAME,
          input,
          input,
        );
      } else {
        throw new Error(`${CONTENT_TRANSFER_ENCODING_HEADER_NAME} ${input} not supported`);
      }
    }

    return this;
  }

  /* Date */

  getDate(): Date | undefined {
    return this.#specializedHeaders.get(DATE_HEADER_NAME);
  }

  setDate(
    input: Date | number | string | undefined,
  ): this {
    if (input === void 0) {
      this.delete(DATE_HEADER_NAME);
    } else if (typeof input === 'number') {
      this.setDate(new Date(input));
    } else if (typeof input === 'string') {
      this.setDate(convertEmailDataDateHeaderToDate(input));
    } else {
      this.#setSpecializedHeader(
        DATE_HEADER_NAME,
        input,
        formatDateToEmailDataDateHeader(input),
      );
    }

    return this;
  }

  // subject:
  // =?utf-8?b?W0pJUkFdIChGUUEtMTIzKSBbQnJlYWRjcnVtYl0gZWZmZXQgaG92ZXIgdW5p?= =?utf-8?b?dmVycyBXZWIgJiBEb21haW5lcyBwYXMgcHLDqXNlbnQ=?=
}

