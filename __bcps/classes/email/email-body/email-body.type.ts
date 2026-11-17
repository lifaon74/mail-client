import { EmailBodyText } from './specialized/email-body-text.class';
import { EmailBodyMultipart } from './specialized/email-body-multipart.class';


export type IEmailBody =
  | EmailBodyText
  | EmailBodyMultipart
;
