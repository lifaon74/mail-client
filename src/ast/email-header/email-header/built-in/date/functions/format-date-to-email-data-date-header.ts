
// https://www.ietf.org/rfc/rfc2822.txt => 3.3 Date and Time Specification

// close to .toGMTString()
// Tue, 1 Mar 2022 13:33:17 +0100


// date-time
export function formatDateToEmailDataDateHeader(
  date: Date,
): string {
  return formatDateToEmailDataDateHeaderDayOfWeak(date) + ',' + ' '
    + formatDateToEmailDataDateHeaderDate(date) + ' '
    + formatDateToEmailDataDateHeaderTime(date)
    ;
}

/* DATE */

// day-of-week
export function formatDateToEmailDataDateHeaderDayOfWeak(
  date: Date,
): string {
  return formatDateToEmailDataDateHeaderDayName(date);
}

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// day-name
export function formatDateToEmailDataDateHeaderDayName(
  date: Date,
): string {
  return DAY_NAMES[date.getDay()];
}

// date
export function formatDateToEmailDataDateHeaderDate(
  date: Date,
): string {
  return formatDateToEmailDataDateHeaderDay(date) + ' '
    + formatDateToEmailDataDateHeaderMonth(date) + ' '
    + formatDateToEmailDataDateHeaderYear(date)
    ;
}

// year
export function formatDateToEmailDataDateHeaderYear(
  date: Date,
): string {
  return date.getFullYear().toString(10).padStart(4, '0');
}

// month
export function formatDateToEmailDataDateHeaderMonth(
  date: Date,
): string {
  return formatDateToEmailDataDateHeaderMonthName(date);
}

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// month-name
export function formatDateToEmailDataDateHeaderMonthName(
  date: Date,
): string {
  return MONTH_NAMES[date.getMonth()];
}

// day
export function formatDateToEmailDataDateHeaderDay(
  date: Date,
): string {
  return date.getDate().toString(10);
}

/* TIME */

// time
export function formatDateToEmailDataDateHeaderTime(
  date: Date,
): string {
  return formatDateToEmailDataDateHeaderTimeOfDay(date) + ' '
    + formatDateToEmailDataDateHeaderZone(date)
    ;
}

// time-of-day
export function formatDateToEmailDataDateHeaderTimeOfDay(
  date: Date,
): string {
  return formatDateToEmailDataDateHeaderHour(date) + ':'
    + formatDateToEmailDataDateHeaderMinute(date) + ':'
    + formatDateToEmailDataDateHeaderSecond(date)
    ;
}

// hour
export function formatDateToEmailDataDateHeaderHour(
  date: Date,
): string {
  return date.getHours().toString(10).padStart(2, '0');
}

// minute
export function formatDateToEmailDataDateHeaderMinute(
  date: Date,
): string {
  return date.getMinutes().toString(10).padStart(2, '0');
}

// second
export function formatDateToEmailDataDateHeaderSecond(
  date: Date,
): string {
  return date.getSeconds().toString(10).padStart(2, '0');
}

// zone
export function formatDateToEmailDataDateHeaderZone(
  date: Date,
): string {
  const offset: number = date.getTimezoneOffset();
  const absoluteOffset: number = Math.abs(offset);

  const hours: number = Math.floor(absoluteOffset / 60);
  const minutes: number = Math.floor(absoluteOffset % 60);

  return ((Math.sign(offset) < 0) ? '+' : '-')
    + hours.toString(10).padStart(2, '0')
    + minutes.toString(10).padStart(2, '0')
    ;
}
