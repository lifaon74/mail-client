import { EmailAddress } from '../email-address/email-address.class';
import { EmailContactName, IEmailContactNameValueToStringMode } from './email-contact-name.class';

/** TYPES **/

export type IEmailContactNameLike =
  | EmailContactName
  | string
  ;

export type IEmailAddressLike =
  | EmailAddress
  | string
  ;

export interface IEmailContactOptions {
  name: IEmailContactNameLike | null;
  address: IEmailAddressLike;
}

export type IEmailContactToStringMode = Omit<IEmailContactNameValueToStringMode, 'unquoted'>;

/** CLASS **/

export class EmailContact {

  static parse(
    input: string,
  ): EmailContact {
    const index: number = input.lastIndexOf('<');

    if (index === -1) {
      return new EmailContact({
        name: null,
        address: EmailAddress.parse(input),
      });
    } else if (input.endsWith('>')) {
      const name: string = input.slice(0, index).trimEnd();
      const address: string = input.slice(index + 1, -1);
      return new EmailContact({
        name: (name === '')
          ? null
          : new EmailContactName(name),
        address: EmailAddress.parse(address),
      });
    } else {
      throw new Error(`Invalid email contact format`);
    }
  }

  #name!: EmailContactName | null;
  #address!: EmailAddress;

  constructor(
    {
      name,
      address,
    }: IEmailContactOptions,
  ) {
    this.name = name;
    this.address = address;
  }

  get name(): EmailContactName | null {
    return this.#name;
  }

  set name(
    input: IEmailContactNameLike | null,
  ) {
    this.#name = (typeof input === 'string')
      ? (
        (input === '')
          ? null
          : new EmailContactName(input)
      )
      : input;
  }

  get address(): EmailAddress {
    return this.#address;
  }

  set address(
    input: IEmailAddressLike,
  ) {
    this.#address = (typeof input === 'string')
      ? EmailAddress.parse(input)
      : input;
  }

  toString(
    mode: IEmailContactToStringMode = 'optionally-quoted',
  ): string {
    return (this.#name === null)
      ? this.#address.toString()
      : `${this.#name.toString(mode as IEmailContactNameValueToStringMode)} <${this.#address.toString()}>`;


    // const prefix: string = (this.#name === null)
    //   ? ''
    //   : `${this.#name.toString(mode as IEmailContactNameValueToStringMode)} `;
    //
    // return `${prefix}<${this.#address.toString()}>`;

  }
}
