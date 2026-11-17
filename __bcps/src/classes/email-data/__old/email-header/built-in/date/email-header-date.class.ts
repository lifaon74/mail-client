import { formatDateToEmailDataDateHeader } from './functions/format-date-to-email-data-date-header';
import { IEmailHeaderDateKeyName, EMAIL_HEADER_DATE_KEY } from './email-header-date-key.contant';
import { convertEmailDataDateHeaderToDate } from './functions/convert-email-data-date-header-to-date';
import { EmailHeaderWithReadonlyKey, IEmailHeaderValueLike } from '../../email-header.class';
import { EmailHeaderDateValue } from './email-header-date-value.class';

/** TYPES **/

export type IEmailHeaderDateLike =
  | Date
  | IEmailHeaderValueLike
  ;

/** CLASS **/

export class EmailHeaderDate extends EmailHeaderWithReadonlyKey<IEmailHeaderDateKeyName> {
  static now(): EmailHeaderDate {
    return new EmailHeaderDate(new Date());
  }

  constructor(
    input: IEmailHeaderDateLike,
  ) {
    super(
      EMAIL_HEADER_DATE_KEY,
      new EmailHeaderDateValue(),
      (input instanceof Date)
        ? formatDateToEmailDataDateHeader(input)
        : input,
    );
  }

  get date(): Date {
    return convertEmailDataDateHeaderToDate(this.value.toString());
  }

  set date(
    input: Date,
  ) {
    this.value = formatDateToEmailDataDateHeader(input);
  }
}
