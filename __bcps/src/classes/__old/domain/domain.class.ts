/**
 * @deprecated
 */
export class Domain {
  #value!: string;

  constructor(
    input: string,
  ) {
    this.value = input;
  }

  get value(): string {
    return this.#value;
  }

  set value(
    input: string,
  ) {
    try {
      const url: URL = new URL(`https://${input}`);
      if (input === url.hostname) {
        this.#value = input;
      } else {
        throw null;
      }
    } catch {
      throw new Error(`Invalid domain`);
    }
  }

  toString(): string {
    return this.#value;
  }
}
