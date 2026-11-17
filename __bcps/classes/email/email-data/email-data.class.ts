import { IMFHeaders } from '../email-headers/email-headers.class';
import { CRLF, CRLF_LENGTH } from '../../../constants/crlf';

/** TYPES **/

export interface IEmailDataBody {
  (): string;
}

/** CLASS **/

export class EmailData {
  static parse(
    input: string,
  ): EmailData {
    const index: number = input.indexOf(CRLF + CRLF);

    if ((index === -1) || !input.endsWith(CRLF)) {
      throw new Error(`Invalid EmailData`);
    } else {
      const headers: IMFHeaders = IMFHeaders.parse(input.slice(0, index));
      const body: string = input.slice(index + CRLF_LENGTH + CRLF_LENGTH, -CRLF_LENGTH);

      return new EmailData(
        headers,
        (): string => body,
      );
    }
  }

  readonly #headers: IMFHeaders;
  readonly #body: IEmailDataBody;

  constructor(
    headers: IMFHeaders,
    body: IEmailDataBody,
  ) {
    this.#headers = headers;
    this.#body = body;
  }

  get headers(): IMFHeaders {
    return this.#headers;
  }

  get body(): IEmailDataBody {
    return this.#body;
  }

  toString(): string {
    return this.headers.toString() + CRLF
      + CRLF
      + this.#body()
      + CRLF
      ;
  }
}


