/** PATTERNS **/

const EMAIL_ADDRESS_LOCAL_PART_REGEXP: RegExp = new RegExp('^[A-Za-z0-9!#$%&\'*+\\-/=?^_`{|}~.]+$');

// [\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f] === [^\x09-\x0a\x0d\x20\x5c]
const EMAIL_ADDRESS_QUOTED_LOCAL_PART_REGEXP: RegExp = new RegExp('^"(?:[^\\x09-\\x0a\\x0d\\x20\\x5c]|\\\\[^\\x0a\\x0d])+"$');

/** CLASS **/

/**
 * @deprecated
 */
export class EmailAddressLocalpart {
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
    if (
      !(
        EMAIL_ADDRESS_LOCAL_PART_REGEXP.test(input)
        || EMAIL_ADDRESS_QUOTED_LOCAL_PART_REGEXP.test(input)
      )
      || (input.length > 64)
    ) {
      throw (`Invalid localpart`);
    } else {
      this.#value = input;
    }
  }

  get isQuoted(): boolean {
    return this.#value.startsWith('"') && this.#value.endsWith('"');
  }

  get unquoted(): string {
    return this.isQuoted
      ? this.#value
        .replace(new RegExp('\\\\([^\\x0a\\x0d])', 'g'), '$1')
        .slice(1, -1)
      : this.#value;
  }

  toString(): string {
    return this.#value;
  }
}
