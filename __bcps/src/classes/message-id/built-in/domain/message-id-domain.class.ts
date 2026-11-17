import { MessageId, IMessageIdOptions } from '../../message-id.class';
import { Domain } from '../../../__old/domain/domain.class';
import { generateUID } from '../../../../misc/generate-uuid';

/** TYPES **/

export type IDomainLike =
  | Domain
  | string
  ;

export interface IMessageIdDomainOptions extends Omit<IMessageIdOptions, 'right'> {
  left: string;
  domain: IDomainLike;
}

export interface IGenerateMessageIdDomainOptions extends Omit<IMessageIdDomainOptions, 'left'> {
  size?: number;
}

/** CLASS **/

export class MessageIdDomain extends MessageId {

  static generate(
    {
      size = 16,
      ...options
    }: IGenerateMessageIdDomainOptions,
  ): MessageIdDomain {
    return new MessageIdDomain({
      ...options,
      left: generateUID(size),
    });
  }

  constructor(
    {
      domain,
      ...options
    }: IMessageIdDomainOptions,
  ) {
    super({
      ...options,
      right: (typeof domain === 'string')
        ? new Domain(domain).toString()
        : domain.toString(),
    });
  }

  get domain(): Domain {
    return new Domain(this.right);
  }

  set domain(
    input: Domain,
  ) {
    this.right = input.toString();
  }
}
