import { EmailAddressLocalpart } from './email-address-local-part.class';
import { Domain } from '../domain/domain.class';

/** TYPES **/

export type IEmailAddressLocalpartLike = EmailAddressLocalpart | string;
export type IDomainLike = Domain | string;

export interface IEmailAddressOptions {
  localpart: IEmailAddressLocalpartLike;
  domain: IDomainLike;
}

/** CLASS **/

/**
 * @deprecated
 */
export class EmailAddress {

  static parse(
    input: string,
  ): EmailAddress {
    const index: number = input.lastIndexOf('@');

    if (index === -1) {
      throw new Error(`Invalid email address: missing @`);
    }

    return new EmailAddress({
      localpart: new EmailAddressLocalpart(input.slice(0, index)),
      domain: new Domain(input.slice(index + 1)),
    });
  }

  #localpart!: EmailAddressLocalpart;
  #domain!: Domain;

  constructor(
    {
      localpart,
      domain,
    }: IEmailAddressOptions,
  ) {
    this.localpart = localpart;
    this.domain = domain;
  }

  get localpart(): EmailAddressLocalpart {
    return this.#localpart;
  }

  set localpart(
    input: IEmailAddressLocalpartLike,
  ) {
    this.#localpart = (typeof input === 'string')
      ? new EmailAddressLocalpart(input)
      : input;
  }

  get domain(): Domain {
    return this.#domain;
  }

  set domain(
    input: IDomainLike,
  ) {
    this.#domain = (typeof input === 'string')
      ? new Domain(input)
      : input;
  }

  toString(): string {
    return `${this.#localpart.toString()}@${this.#domain.toString()}`;
  }
}
