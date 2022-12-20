import { createEmailHeader } from '../../create-email-header';
import { IEmailHeader } from '../../email-header.type';
import { IEmailHeaderDate } from './email-header-date.type';
import { formatDateToEmailDataDateHeader } from './functions/format-date-to-email-data-date-header';

export function createEmailHeaderDate(
  _date: Date,
): IEmailHeaderDate {
  const parent: IEmailHeader = createEmailHeader({
    key: 'Date',
    value: '',
  });

  const getValue = (): string => {
    return formatDateToEmailDataDateHeader(_date);
  };

  const getDate = (): Date => {
    return _date;
  };

  const toString = (): string => {
    return `${parent.getKey()}: ${getValue()}`;
  };

  return {
    ...parent,
    getValue,
    getDate,
    toString,
  };
}

/*-----*/

export function createEmailHeaderDateNow(): IEmailHeaderDate {
  return createEmailHeaderDate(new Date());
}
