import { CRLF } from '../../constants/crlf';
import { EMAIL_DATA_MAX_LINE_LENGTH } from '../email-data/misc/line-length-limits';

export type IEmailBodyToStringMode =
  | 'raw'
  | 'base64'
  | 'utf-8'
  ;

export type IEmailBodyToStringSplit =
  | number
  | 'auto'
  | 'none'
  ;

export interface IEmailBodyToStringOptions {
  mode?: IEmailBodyToStringMode;
  split?: IEmailBodyToStringSplit;
}

export class EmailBody {
  #data!: Uint8Array;

  constructor(
    data: Uint8Array | string,
  ) {
    this.data = data;
  }

  get data(): Uint8Array {
    return this.#data;
  }

  set data(
    input: Uint8Array | string,
  ) {
    this.#data = (typeof input === 'string')
      ? new TextEncoder().encode(input)
      : input;
  }

  toString(
    {
      mode = 'base64',
      split = 'auto',
    }: IEmailBodyToStringOptions = {},
  ): string {
    let output: string;

    if (mode === 'raw') {
      output = '';
      for (let i = 0, l = this.#data.length; i < l; i++) {
        output += String.fromCharCode(this.#data[i]);
      }
    } else if (mode === 'base64') {
      output = btoa(this.toString({ mode: 'raw', split: 'none' }));
    } else {
      output = new TextDecoder().decode(this.#data);
    }

    if (split === 'none') {
      return output;
    } else {
      const _split: number = (typeof split === 'number')
        ? split
        : EMAIL_DATA_MAX_LINE_LENGTH;

      return output.replace(
        new RegExp(`(.{${_split}})`, 'g'),
        (_, chunk: string) => `${chunk}${CRLF}`,
      );
    }
  }
}


