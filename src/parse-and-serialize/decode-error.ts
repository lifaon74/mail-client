export class DecodeError extends Error {
  // static invalidChar(
  //   ...expected: readonly string[]
  // ): DecodeError {
  //   return new DecodeError(`Invalid char.${expected.length > 0 ? ' Expected: ' + new Intl.ListFormat('en-US', { type: 'disjunction' }).format(expected) : ''}`);
  // }
  static invalidChar(
    expected?: string,
  ): DecodeError {
    return new DecodeError(`Invalid char.${(expected === void '') ? '' : `Expected: ${expected}.`}`);
  }

  constructor(
    message: string,
    options?: any,
  ) {
    super(message, options);
    this.name = this.constructor.name;
  }
}
