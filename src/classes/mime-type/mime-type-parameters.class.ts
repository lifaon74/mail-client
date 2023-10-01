/** CONSTANTS **/

const TOKEN_INNER_PATTERN = '0-9a-zA-Z\\!\\#\\$\\%\\&\'\\*\\+\\-\\.\\^_\\`\\|\\~';
const TOKEN_PATTERN = `[${TOKEN_INNER_PATTERN}]`;

const MIMETypeParameterKeyRegExp = new RegExp(`^${TOKEN_PATTERN}+$`);
const MIMETypeParameterValueRegExp = new RegExp('^[\\u0009\\u0020-\\u007e]*$');
const MIMETypeParameterValueRequiringQuotingRegExp = new RegExp(`[^${TOKEN_INNER_PATTERN}]`);

const MIMETypeParameterRegExp = new RegExp(`;\s*(${TOKEN_PATTERN}+)=(?:"((?:[^"]|\\")+?)"|(${TOKEN_PATTERN}))`, 'g');


/** TYPES **/

export type IMIMETypeParameterTuple = [
  key: string,
  value: string,
];

/** CLASS **/

export class MIMETypeParameters {
  readonly #parameters: Map<string, string>;

  constructor(
    input: Iterable<IMIMETypeParameterTuple> | string = [],
  ) {
    this.#parameters = new Map<string, string>();

    if (typeof input === 'string') {
      if (input !== '') {
        let match: RegExpExecArray | null;
        MIMETypeParameterRegExp.lastIndex = 0;
        while ((match = MIMETypeParameterRegExp.exec(input)) !== null) {
          // TODO continue here

          console.log(match);
        }
      }
    } else {
      const iterator: Iterator<IMIMETypeParameterTuple> = input[Symbol.iterator]();
      let result: IteratorResult<IMIMETypeParameterTuple>;
      while (!(result = iterator.next()).done) {
        this.set(
          result[0],
          result[1],
        );
      }
    }
  }

  /** MAP **/

  get size(): number {
    return this.#parameters.size;
  }

  has(
    key: string,
  ): boolean {
    return this.#parameters.has(key.toLowerCase());
  }

  get(
    key: string,
  ): string | undefined {
    return this.#parameters.get(key.toLowerCase());
  }

  set(
    key: string,
    value: string,
  ): void {
    if (MIMETypeParameterKeyRegExp.test(key)) {
      if (MIMETypeParameterValueRegExp.test(value)) {
        this.#parameters.set(key.toLowerCase(), value);
      } else {
        throw new Error(`Invalid parameter value`);
      }
    } else {
      throw new Error(`Invalid parameter key`);
    }
  }

  delete(
    key: string,
  ): boolean {
    return this.#parameters.delete(key.toLowerCase());
  }

  clear(): void {
    this.#parameters.clear();
  }

  keys(): IterableIterator<string> {
    return this.#parameters.keys();
  }

  values(): IterableIterator<string> {
    return this.#parameters.values();
  }

  entries(): IterableIterator<IMIMETypeParameterTuple> {
    return this.#parameters.entries();
  }

  [Symbol.iterator](): IterableIterator<IMIMETypeParameterTuple> {
    return this.entries();
  }

  toString(): string {
    let output: string = '';

    const iterator: Iterator<IMIMETypeParameterTuple> = this.entries();
    let result: IteratorResult<IMIMETypeParameterTuple>;
    while (!(result = iterator.next()).done) {
      const [key, value]: IMIMETypeParameterTuple = result.value;

      if (output !== '') {
        output += '; ';
      }

      const _value: string = MIMETypeParameterValueRequiringQuotingRegExp.test(value)
        ? `"${
          value
            .replace('\\', '\\\\')
            .replace('"', '\\"')
        }"`
        : value;

      output += `${key}${(_value === '') ? '' : `=${_value}`}`;
    }

    return output;
  }
}
