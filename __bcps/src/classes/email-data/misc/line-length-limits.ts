import { CRLF } from '../../../constants/crlf';

// https://www.ietf.org/rfc/rfc2822.txt
// 2.1.1. Line Length Limits

export const EMAIL_DATA_MAX_LINE_LENGTH = 78;
export const EMAIL_DATA_MAX_LINE_LENGTH_INCLUDING_CRLF = EMAIL_DATA_MAX_LINE_LENGTH - 2;
export const EMAIL_DATA_MAX_LINE_LENGTH_LARGE = 998;

export interface IApplyEmailDataLineLimitsOptions {
  maxLineLength?: number;
  firstLineMaxLength?: number;
}

export function applyEmailDataLineLimits(
  input: string,
  {
    maxLineLength = EMAIL_DATA_MAX_LINE_LENGTH_INCLUDING_CRLF,
    firstLineMaxLength = maxLineLength,
  }: IApplyEmailDataLineLimitsOptions,
): string {
  let i: number = 0;
  let output: string = '';

  let maxLength: number = firstLineMaxLength;

  while ((input.length - i) > maxLength) {

    const maxSplitIndex: number = Math.min(input.length, i + maxLength);

    let j: number = maxSplitIndex - 1;
    while ((j >= i) && !isWhiteSpaceCharacter(input.at(j)!)) {
      j--;
    }

    const splitIndex: number = (j < i)
      ? maxSplitIndex
      : j;

    const splitChar: string = (j < i)
      ? ' '
      : input.at(j)!;

    output += input.slice(i, splitIndex) + CRLF
      + splitChar;

    i = splitIndex + 1;

    maxLength = maxLineLength - 1; // minus splitChar
  }

  output += input.slice(i);

  return output;
}


export interface IApplyEmailDataLineLimitsUsingPrefixOptions extends Omit<IApplyEmailDataLineLimitsOptions, 'firstLineMaxLength'>{
  maxLineLength?: number;
}

export function applyEmailDataLineLimitsUsingPrefix(
  input: string,
  prefix: string,
  {
    maxLineLength = EMAIL_DATA_MAX_LINE_LENGTH_INCLUDING_CRLF,
  }: IApplyEmailDataLineLimitsUsingPrefixOptions = {},
): string {
  return applyEmailDataLineLimits(
    input,
    {
      maxLineLength,
      firstLineMaxLength: maxLineLength - prefix.length,
    },
  )
}



function isWhiteSpaceCharacter(
  input: string,
): boolean {
  return (input === ' ') // SP
    || (input === '\t'); // TAB
}
