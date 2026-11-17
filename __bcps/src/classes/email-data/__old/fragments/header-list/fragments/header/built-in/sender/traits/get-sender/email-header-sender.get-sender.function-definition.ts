import { IEmailContact } from '../../../../../../../../../../email-contact/email-contact.type';

export interface IEmailHeaderSenderGetSenderFunction {
  (): IEmailContact;
}
