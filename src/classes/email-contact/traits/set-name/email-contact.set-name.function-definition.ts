import { IEmailContactName } from '../../components/email-contact-name/email-contact-name.type';

export interface IEmailContactSetNameFunction {
  (
    value: IEmailContactName | null,
  ): void;
}
