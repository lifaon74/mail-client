import { createEmailHeaderDate } from './create-email-header-date';
import { IEmailHeaderDate } from './email-header-date.type';
import { convertEmailDataDateHeaderToDate } from './functions/convert-email-data-date-header-to-date';

export function createEmailHeaderDateFromValueString(
  input: string,
): IEmailHeaderDate {
  return createEmailHeaderDate(
    convertEmailDataDateHeaderToDate(input),
  );
}
