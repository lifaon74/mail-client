/** CLASS **/

export class EmailHeaderKey {
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

/* READONLY */

export class EmailHeaderKeyWithReadonlyValue<GValue extends string> extends EmailHeaderKey {
  constructor(
    value: GValue,
  ) {
    super(value);
  }

  override get value(): GValue {
    return super.value as GValue;
  }

  override set value(
    input: GValue,
  ) {
    if (this.value === void 0) {
      super.value = input;
    } else {
      throw new Error(`Readonly`);
    }
  }
}



