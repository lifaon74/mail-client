import { IMessageId } from '../../message-id.type';
import { IMessageIdDomainGetDomainTrait } from './traits/get-domain/message-id-domain.get-domain.trait';

export interface IMessageIdDomain extends IMessageId,//
  IMessageIdDomainGetDomainTrait
  //
{
}
