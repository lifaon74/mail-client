import { formatDateToEmailDataDateHeader } from './functions/format-date-to-email-data-date-header';
import { convertEmailDataDateHeaderToDate } from './functions/convert-email-data-date-header-to-date';
import { EmailHeaderValue } from '../../email-header-value.class';

/** TYPES **/

export type IEmailHeaderDateValueLike =
  | Date
  | string
  ;

/** CLASS **/

export class EmailHeaderDateValue extends EmailHeaderValue {
  static now(): EmailHeaderDateValue {
    return new EmailHeaderDateValue(new Date());
  }

  constructor(
    input: IEmailHeaderDateValueLike,
  ) {
    super(
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
