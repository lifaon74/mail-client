import { MIMETypeParameters } from './mime-type-parameters.class';

/** CONSTANTS **/

const TOKEN_PATTERN = '[0-9a-zA-Z\\!\\#\\$\\%\\&\'\\*\\+\\-\\.\\^_\\`\\|\\~]';

const MIMETypeTypeRegExp = new RegExp(`^${TOKEN_PATTERN}+$`);
const MIMETypeSubtypeRegExp = new RegExp(`^${TOKEN_PATTERN}+$`);

/** CLASS **/

export class MIMEType {
  #type: string;
  #subtype: string;
  readonly #parameters: MIMETypeParameters;

  constructor(
    input: string,
  ) {
    let typeAndSubtype: string, parameters: string;

    const indexOfParameters: number = input.indexOf(';');

    if (indexOfParameters === -1) {
      typeAndSubtype = input;
      parameters = '';
    } else {
      typeAndSubtype = input.slice(0, indexOfParameters);
      parameters = input.slice(indexOfParameters);
    }

    const indexOfSubtype: number = typeAndSubtype.indexOf('/');

    if (indexOfSubtype === -1) {
      throw new Error(`Invalid MimeType.`);
    }

    this.#type = '';
    this.#subtype = '';

    this.type = typeAndSubtype.slice(0, indexOfSubtype);
    this.subtype = typeAndSubtype.slice(indexOfSubtype + 1);

    this.#parameters = new MIMETypeParameters(parameters);
  }

  get type(): string {
    return this.#type;
  }

  set type(
    input: string,
  ) {
    if (MIMETypeTypeRegExp.test(input)) {
      this.#type = input;
    } else {
      throw new Error(`Invalid type: ${input}`);
    }
  }

  get subtype(): string {
    return this.#subtype;
  }

  set subtype(
    input: string,
  ) {
    if (MIMETypeSubtypeRegExp.test(input)) {
      this.#subtype = input;
    } else {
      throw new Error(`Invalid subtype: ${input}`);
    }
  }

  get parameters(): MIMETypeParameters {
    return this.#parameters;
  }

  toString(): string {
    return `${this.#type}/${this.#subtype}${this.#parameters.size === 0 ? '' : `; ${this.#parameters.toString()}`}`;
  }
}

