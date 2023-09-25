/** TYPES **/

export interface IMessageIdOptions {
  left: string;
  right: string;
}

/** CLASS **/

export class MessageId {
  static parse(
    input: string,
  ): MessageId {
    const parts: string[] = input.split('@');
    if (parts.length === 2) {
      return new MessageId({
        left: parts[0],
        right: parts[1],
      });
    } else {
      throw new Error(`Invalid MessageId`);
    }
  }

  #left!: string;
  #right!: string;

  constructor(
    {
      left,
      right,
    }: IMessageIdOptions,
  ) {
    this.left = left;
    this.right = right;
  }

  get left(): string {
    return this.#left;
  }

  set left(
    input: string,
  ) {
    this.#left = input;
  }

  get right(): string {
    return this.#right;
  }

  set right(
    input: string,
  ) {
    this.#right = input;
  }

  toString(): string {
    return `${this.#left}@${this.#right}`;
  }
}
