/** CLASS **/

export class EmailHeaderValue {
  #value!: string;

  constructor(
    value: string,
  ) {
    this.value = value;
  }

  get value(): string {
    return this.#value;
  }

  set value(
    input: string,
  ) {
    this.#value = input;
  }

  toString(): string {
    return this.#value;
  }
}


