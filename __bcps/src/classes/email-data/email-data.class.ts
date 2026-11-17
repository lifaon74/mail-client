import { CRLF } from '../../constants/crlf';
import { EmailBody } from '../email-body/email-body.class';
import { EmailHeaderList } from './__old/email-header/email-header-list.class';

/** TYPES **/

export interface IEmailDataOptions {
  headers: EmailHeaderList;
  body: EmailBody;
}

/** CLASS **/

export class EmailData {

  static parse(
    input: string,
  ): EmailData {
    const index: number = input.indexOf(CRLF + CRLF);
    const headers: EmailHeaderList = EmailHeaderList.parse(input.slice(0, index));

    // const contentType: IEmailHeaderContentType | undefined = headers.get().find<IEmailHeaderContentType>((_): _ is IEmailHeaderContentType => _.getKey() === EMAIL_HEADER_CONTENT_TYPE_KEY);
    // const contentTransferEncoding: IEmailHeaderContentTransferEncoding | undefined = headers.getItem(HEADER_CONTENT_TRANSFER_ENCODING_KEY_NAME) as (IEmailHeaderContentTransferEncoding | undefined);
    //
    // if (contentType !== void 0) {
    //   if (contentType.getMimeType().getTypeAndSubType() === 'text/plain') {
    //
    //     if (contentTransferEncoding !== void 0) {
    //       if (contentTransferEncoding.getContentTransferEncoding() === 'base64') {
    //         console.log('ok');
    //       }
    //     }
    //   }
    // }

    return new EmailData({
      headers,
      body: new EmailBody(input.slice(index + 4)),
    });
  }

  #headers: EmailHeaderList;
  #body: EmailBody;

  constructor(
    {
      headers,
      body,
    }: IEmailDataOptions,
  ) {
    this.#headers = headers;
    this.#body = body;
  }

  get headers(): EmailHeaderList {
    return this.#headers;
  }

  set headers(
    headers: EmailHeaderList,
  ) {
    this.#headers = headers;
  }

  get body(): EmailBody {
    return this.#body;
  }

  set body(
    body: EmailBody,
  ) {
    this.#body = body;
  }

  toString(): string {
    return this.#headers.toString() + CRLF
      + CRLF
      + this.#body.toString({
        mode: 'base64',
        split: 'auto',
      });
  }
}
