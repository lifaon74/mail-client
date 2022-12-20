import { IEmailAddress } from '../../../email-address/email-address.type';

export interface IEmailContactGetAddressFunction {
  (): IEmailAddress;
}
