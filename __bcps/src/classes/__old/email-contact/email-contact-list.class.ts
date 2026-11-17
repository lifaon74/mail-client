import { EmailContact } from './email-contact.class';
import { iterableToArray } from '../../../misc/iterable-to-array';
import { CRLF } from '../../../constants/crlf';

/** TYPES **/

export interface IEmailContactListToStringOptions {
  withFoldingWhiteSpace?: boolean;
}

/** CLASS **/

export class EmailContactList {

  static parse(
    input: string,
  ): EmailContactList {
    return new EmailContactList(
      input.split(/,\s*/).map((chunk: string): EmailContact => {
        return EmailContact.parse(chunk);
      }),
    );
  }

  #list!: EmailContact[];

  constructor(
    contacts: Iterable<EmailContact>,
  ) {
    this.#list = iterableToArray(contacts);
  }

  get list(): EmailContact[] {
    return this.#list;
  }

  set list(
    input: Iterable<EmailContact>,
  ) {
    this.#list = iterableToArray<EmailContact>(input);
  }

  toString(
    {
      withFoldingWhiteSpace = true,
    }: IEmailContactListToStringOptions = {},
  ): string {
    const crlf: string = withFoldingWhiteSpace
      ? CRLF
      : '';

    return this.#list.reduce<string>((previousValue: string, currentValue: EmailContact, index: number): string => {
      return `${(index === 0) ? '' : `${previousValue},${crlf} `}${currentValue.toString()}`;
    }, '');
  }
}
