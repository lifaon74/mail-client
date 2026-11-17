/** TYPES **/

export interface IMFHeaderValue {
  (): string;
}

/** CLASS **/

export class IMFHeader {
  static parse(
    input: string,
  ): IMFHeader {
    const index: number = input.indexOf(': ');
    let key: string;
    let value: string;

    // TODO improve parsing
    if (index === -1) {
      if (input.endsWith(':')) { // empty header
        key = input.slice(0, -1);
        value = '';
      } else {
        throw new Error(`Invalid email header: ${JSON.stringify(input)}`);
      }
    } else {
      key = input.slice(0, index);
      value = input.slice(index + 2);
    }

    return new IMFHeader(
      key,
      (): string => value,
    );
  }

  readonly #key: string;
  readonly #value: IMFHeaderValue;

  constructor(
    key: string,
    value: IMFHeaderValue,
  ) {
    this.#key = key;
    this.#value = value;
  }

  get key(): string {
    return this.#key;
  }

  get value(): IMFHeaderValue {
    return this.#value;
  }

  toString(): string {
    return `${this.#key}: ${this.#value()}`;
  }
}


