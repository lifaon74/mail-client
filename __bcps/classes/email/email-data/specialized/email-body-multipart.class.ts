import { CRLF, CRLF_LENGTH } from '../../../../constants/crlf';
import { EmailData } from '../../email-data/email-data.class';

// https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html

export interface IEmailBodyMultipartToStringOptions {
  readonly boundary: string;
}

export interface IEmailBodyMultipartParseOptions {
  readonly boundary: string;
}

export class EmailBodyMultipart {

  static generateBoundary(): string {
    return `_=_${Array.from({ length: 30 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}_=_`;
  }

  static parse(
    input: string,
    {
      boundary,
    }: IEmailBodyMultipartParseOptions,
  ): EmailBodyMultipart {
    const parts: string[] = input.split(`--${boundary}` + CRLF);
    const end: string = `--${boundary}--`;

    if (parts.length < 2) {
      throw new Error(`Not enough parts.`);
    } else {
      const preludePart: string = parts.shift()!;

      const preamble: string = preludePart.endsWith(CRLF)
        ? preludePart.slice(0, -CRLF_LENGTH)
        : preludePart;
      const lastPartIndex: number = parts.length - 1;
      const lastPart: string = parts[lastPartIndex];

      if (lastPart.endsWith(end)) {
        parts[lastPartIndex] = parts[lastPartIndex].slice(0, -end.length);

        return new EmailBodyMultipart(
          parts.map((part: string): EmailData => {
            return EmailData.parse(part);
          }),
          preamble,
        );
      } else {
        throw new Error(`Invalid last part.`);
      }
    }
  }

  parts: readonly EmailData[];
  preamble: string;

  constructor(
    parts: readonly EmailData[],
    preamble: string = '',
  ) {
    this.parts = parts;
    this.preamble = preamble;
  }

  toString(
    {
      boundary,
    }: IEmailBodyMultipartToStringOptions,
  ): string {
    return ((this.preamble === '') ? '' : (this.preamble + CRLF))
      + this.parts
        .map((data: EmailData): string => {
          return `--${boundary}` + CRLF
            + data.toString();
        })
        .join('')
      + `--${boundary}--`;
  }
}
