import { EmailHeaderKey, EmailHeaderKeyWithReadonlyValue } from './email-header-key.class';
import { EmailHeaderValue } from './email-header-value.class';

/** TYPES **/

export type IEmailHeaderKeyLike =
  | EmailHeaderKey
  | string
  ;

export type IEmailHeaderValueLike =
  | EmailHeaderValue
  | string
  ;

/** CLASS **/

export class EmailHeader {
  static parse(
    input: string,
  ): EmailHeader {
    const index: number = input.indexOf(': ');

    // TODO improve parsing
    // TODO handle index === -1

    return new EmailHeader(
      new EmailHeaderKey(input.slice(0, index)),
      new EmailHeaderValue(input.slice(index + 2)),
    );
  }

  #key!: EmailHeaderKey;
  #value!: EmailHeaderValue;

  constructor(
    key: IEmailHeaderKeyLike,
    value: IEmailHeaderValueLike,
  ) {
    this.key = key;
    this.value = value;
  }

  get key(): EmailHeaderKey {
    return this.#key;
  }

  set key(
    input: IEmailHeaderKeyLike,
  ) {
    this.#key = (typeof input === 'string')
      ? new EmailHeaderKey(input)
      : input;
  }

  get value(): EmailHeaderValue {
    return this.#value;
  }

  set value(
    input: IEmailHeaderValueLike,
  ) {
    this.#value = (typeof input === 'string')
      ? new EmailHeaderValue(input)
      : input;
  }

  toString(): string {
    return `${this.key.toString()}: ${this.value.toString()}`;
  }
}

/* READONLY */

export type IEmailHeaderWithReadonlyKeyLike<GKey extends string> =
  | EmailHeaderKey
  | EmailHeaderKeyWithReadonlyValue<GKey>
  | GKey
  ;

export class EmailHeaderWithReadonlyKey<GKey extends string> extends EmailHeader {
  constructor(
    key: IEmailHeaderWithReadonlyKeyLike<GKey>,
    value: IEmailHeaderValueLike,
  ) {
    super(
      key,
      value,
    );
  }

  override get key(): EmailHeaderKeyWithReadonlyValue<GKey> {
    return super.key as EmailHeaderKeyWithReadonlyValue<GKey>;
  }

  override set key(
    input: IEmailHeaderWithReadonlyKeyLike<GKey>,
  ) {
    if (this.key === void 0) {
      if (typeof input === 'string') {
        super.key = new EmailHeaderKeyWithReadonlyValue(input);
      } else if (input instanceof EmailHeaderKeyWithReadonlyValue) {
        super.key = input;
      } else {
        super.key = new EmailHeaderKeyWithReadonlyValue<GKey>(input.value as GKey);
      }
    } else {
      throw new Error(`Readonly`);
    }
  }
}

/*----*/

export class EmailHeaderSpecialized<GKey extends string, GValue extends EmailHeaderValue> extends EmailHeaderWithReadonlyKey<GKey> {
  constructor(
    key: IEmailHeaderWithReadonlyKeyLike<GKey>,
    value: GValue,
  ) {
    super(
      key,
      value,
    );
  }

  override get value(): GValue {
    return super.key as GValue;
  }

  override set key(
    input: IEmailHeaderWithReadonlyKeyLike<GKey>,
  ) {
    if (this.key === void 0) {
      if (typeof input === 'string') {
        super.key = new EmailHeaderKeyWithReadonlyValue(input);
      } else if (input instanceof EmailHeaderKeyWithReadonlyValue) {
        super.key = input;
      } else {
        super.key = new EmailHeaderKeyWithReadonlyValue<GKey>(input.value as GKey);
      }
    } else {
      throw new Error(`Readonly`);
    }
  }
}
