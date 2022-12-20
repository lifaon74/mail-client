import { IEmailHeader } from '../../components/header/email-header.type';

export interface IEmailHeaderListAddItemFunction {
  (
    item: IEmailHeader,
  ): void;
}
