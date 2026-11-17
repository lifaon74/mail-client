import { CRLF } from '../../../../constants/crlf';
import { EmailHeader } from './email-header.class';
import { Dedup } from '../../../../types/dedup.type';
import { iterableToArray } from '../../../../misc/iterable-to-array';
import { EmailHeaderValue } from './email-header-value.class';
import { EmailHeaderKey } from './email-header-key.class';

/** TYPES **/

export type IEmailHeaderListKeyValueTupleEntry = [
  key: string,
  value: string,
];

export type IEmailHeaderListEntry =
  | IEmailHeaderListKeyValueTupleEntry
  | EmailHeader
  ;

/** CLASS **/

export class EmailHeaderList {
  static parse(
    input: string,
  ): EmailHeaderList {
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

    return new EmailHeaderList(
      headers.map((header: string): EmailHeader => {
        return EmailHeader.parse(header);
      }),
    );
  }


  #list: EmailHeader[];

  constructor(
    headers: Iterable<IEmailHeaderListEntry> = [],
    dedup: Dedup = 'replace',
  ) {
    this.#list = [];

    const iterator: Iterator<IEmailHeaderListEntry> = headers[Symbol.iterator]();
    let result: IteratorResult<IEmailHeaderListEntry>;
    while (!(result = iterator.next()).done) {
      const entry: IEmailHeaderListEntry = result.value;
      if (entry instanceof EmailHeader) {
        this.setHeader(
          entry,
          dedup,
        );
      } else {
        this.set(
          entry[0],
          entry[1],
          dedup,
        );
      }
    }
  }

  get list(): EmailHeader[] {
    return this.#list;
  }

  set list(
    input: Iterable<EmailHeader>,
  ) {
    this.#list = iterableToArray<EmailHeader>(input);
  }

  /** ARRAY **/

  getHeaderIndex(
    key: string,
    fromIndex: number = 0,
  ): number {
    for (const l: number = this.#list.length; fromIndex < l; fromIndex++) {
      const header: EmailHeader = this.#list[fromIndex];
      if (header.key.toString() === key) {
        return fromIndex;
      }
    }
    return -1;
  }

  getHeader(
    key: string,
    fromIndex?: number,
  ): EmailHeader | undefined {
    const index: number = this.getHeaderIndex(key, fromIndex);
    return (index === -1)
      ? void 0
      : this.#list[index];
  }

  setHeader(
    header: EmailHeader,
    dedup: Dedup = 'replace',
  ): void {
    const index: number = this.getHeaderIndex(header.key.toString());
    if (index === -1) {
      this.#list.push(header);
    } else {
      if (dedup === 'throw') {
        throw new Error(`Header already exists`);
      } else if (dedup === 'replace') {
        this.#list[index] = header;
      } // skip => do nothing
    }
  }

  /** MAP **/

  get size(): number {
    return this.#list.length;
  }

  has(
    key: string,
  ): boolean {
    return this.getHeaderIndex(key) !== -1;
  }

  get(
    key: string,
  ): string | undefined {
    const header: EmailHeader | undefined = this.getHeader(key);

    if (header === void 0) {
      return void 0;
    } else {
      return header.value.toString();
    }
  }

  set(
    key: string,
    value: string,
    dedup?: Dedup,
  ): void {
    this.setHeader(
      new EmailHeader(key, value),
      dedup,
    );
  }

  delete(
    key: string,
  ): boolean {
    const index: number = this.getHeaderIndex(key);
    if (index === -1) {
      return false;
    } else {
      this.#list.splice(index, 1);
      return true;
    }
  }

  clear(): void {
    this.#list.length = 0;
  }

  * entries(): IterableIterator<[string, string]> {
    for (let i: number = 0, l: number = this.#list.length; i < l; i++) {
      const header: EmailHeader = this.#list[i];

      yield [
        header.key.toString(),
        header.value.toString(),
      ];
    }
  }

  [Symbol.iterator](): IterableIterator<[string, string]> {
    return this.entries();
  }

  toString(): string {
    let output: string = '';

    for (let i: number = 0, l: number = this.#list.length; i < l; i++) {
      if (output !== '') {
        output += CRLF;
      }

      output += this.#list[i].toString();
    }

    return output;
  }
}
