import { IEmailHeaderList } from '../../components/header-list/email-header-list.type';

export interface IEmailDataGetHeadersFunction {
  (): IEmailHeaderList;
}
