import { generateUID } from '../../../../misc/generate-uuid';
import { IDomain } from '../../../domain/domain.type';
import { createMessageId, ICreateMessageIdOptions } from '../../create-message-id';
import { IMessageId } from '../../message-id.type';
import { IMessageIdDomain } from './message-id-domain.type';

export interface ICreateMessageIdDomainOptions extends Omit<ICreateMessageIdOptions, 'right'> {
  left: string; // expected valid
  domain: IDomain;
}

export function createMessageIdDomain(
  {
    domain: _domain,
    ...options
  }: ICreateMessageIdDomainOptions,
): IMessageIdDomain {
  const parent: IMessageId = createMessageId({
    ...options,
    right: '',
  });

  const getDomain = (): IDomain => {
    return _domain;
  };

  const getRight = (): string => {
    return _domain.toString();
  };

  const toString = (): string => {
    return `${parent.getLeft()}@${getRight()}`;
  };

  return {
    ...parent,
    getDomain,
    getRight,
    toString,
  };
}

/*-----*/

export interface IGenerateMessageIdDomainOptions extends Omit<ICreateMessageIdDomainOptions, 'left'> {
  size?: number;
}

export function generateMessageIdDomain(
  {
    size = 16,
    ...options
  }: IGenerateMessageIdDomainOptions,
): IMessageIdDomain {
  return createMessageIdDomain({
    ...options,
    left: generateUID(size),
  });
}
