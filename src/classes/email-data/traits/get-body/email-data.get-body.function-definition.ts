import { IEmailBody } from '../../components/body/email-body.type';

export interface IEmailDataGetBodyFunction {
  (): IEmailBody;
}
