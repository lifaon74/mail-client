import { createEmailHeaderDate } from './create-email-header-date';
import { IEmailHeaderDate } from './email-header-date.type';

export function createEmailHeaderDateNow(): IEmailHeaderDate {
  return createEmailHeaderDate(new Date());
}
