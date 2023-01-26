import { CRLF } from '../../../../constants/crlf';
import { createEmailHeaderFromString } from './components/header/create-email-header-from-string';
import { createEmailHeaderListFromIterable } from './create-email-header-list-from-iterable';
import { IEmailHeaderList } from './email-header-list.type';

export function createEmailHeaderListFromString(
  input: string,
): IEmailHeaderList {
  const headers: string[] = [];

  const appendLine = (
    line: string,
  ): void => {
    if (
      line.startsWith(' ')
      || line.startsWith('\t')
    ) {
      if (headers.length === 0) {
        throw new Error(`Not an header list`);
      } else {
        headers[headers.length - 1] += line;
      }
    } else {
      headers.push(line);
    }
  };

  let position: number = 0;

  while (true) {
    const index: number = input.indexOf(CRLF, position);
    if (index === -1) {
      appendLine(input.slice(position));
      break;
    } else {
      appendLine(input.slice(position, index));
      position = index + 2;
    }
  }

  return createEmailHeaderListFromIterable(
    headers.map(createEmailHeaderFromString),
  );
}
