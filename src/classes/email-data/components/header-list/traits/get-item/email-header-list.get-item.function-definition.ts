import { IEmailHeader } from '../../components/header/email-header.type';

export interface IEmailHeaderListGetItemFunction {
  (
    key: string,
  ): IEmailHeader | undefined;
}
