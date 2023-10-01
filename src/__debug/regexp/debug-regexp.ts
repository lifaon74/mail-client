

// const NAMED_REG_EXP_START_TOKEN = '\u21ac';
// const NAMED_REG_EXP_END_TOKEN = '\u21ab';

const NAMED_REG_EXP_START_TOKEN = 'ჵ';
const NAMED_REG_EXP_END_TOKEN = 'ᲀ';

// const NAMED_REG_EXP_START_TOKEN = '<=';
// const NAMED_REG_EXP_END_TOKEN = '=>';

export type INamedRegExpToStringMode =
  | 'id'
  | 'pattern'
;

const NAMED_REG_EXP_NAME_PATTERN = '[a-zA-Z0-9\\-]+'
const NAMED_REG_EXP_NAME = new RegExp(`^${NAMED_REG_EXP_NAME_PATTERN}$`);

const NAMED_REG_EXP_IDENTIFIER = new RegExp(`\\\\i<(${NAMED_REG_EXP_NAME_PATTERN}?)>`, 'g');

export class NamedRegExp {
  static readonly #map = new Map<string, NamedRegExp>();

  static #get(
    name: string,
  ): NamedRegExp {
    const reg: NamedRegExp | undefined = this.#map.get(name);
    if (reg === void 0) {
      throw new Error(`Unknown NamedRegExp: ${name}`);
    } else {
      return reg;
    }
  }

  static #set(
    name: string,
    instance: NamedRegExp,
  ): void {
    if (this.#map.has(name)) {
      throw new Error(`Name already taken: ${name}`);
    } else {
      this.#map.set(name, instance);
    }
  }

  readonly #name: string;
  readonly #pattern: string;
  // readonly #regexp: RegExp;

  constructor(
    name: string,
    pattern: string,
  ) {
    if (!NAMED_REG_EXP_NAME.test(name)) {
      throw new Error(`Invalid name: ${name}`);
    }

    NamedRegExp.#set(name, this);

    this.#name = name;
    this.#pattern = pattern;



    // console.log(this.#regexp.source);
  }

  get name(): string {
    return this.#name;
  }

  get pattern(): string {
    return this.#pattern;
  }

  get identifier(): string {
    return `\\i<${this.name}>`;
  }


  exec(
    input: string,
  ): any {
  // ): RegExpExecArray | null {

    const regexp = new RegExp(
      this.#resolvePattern(true),
      'gds'
    );

    console.log(regexp.source);

    console.log(
      regexp.exec(input),
    );
  }

  // test(string: string): boolean {
  //
  // }

  #resolvePattern(
    capture: boolean,
    // capture: '*' | Iterable<string> = '*',
  ): string {

    return this.#pattern.replaceAll(NAMED_REG_EXP_IDENTIFIER, (_, name: string): string => {
      const reg: NamedRegExp = NamedRegExp.#get(name);

      if (capture) {
        return `(?<${reg.name}>${reg.#resolvePattern(false)})`;
      } else {
        return reg.#resolvePattern(false);
      }
    });
  }

  // capture(): string {
  //   return `(?<${this.name}>${this.#resolvePattern('pattern')})`;
  // }

  toString(): string {
    return this.identifier;
  }
}


// export function regexp(
//   parts: TemplateStringsArray,
//   ...values: any[]
// ) {
//   console.log(parts, values);
// }

// export interface IRegExp {
//   readonly source: string;
//   readonly flags: string;
//
//   exec(string: string): RegExpExecArray | null;
//   test(string: string): boolean;
// }


export function debugRegexp() {
  // \i<name>
  const token = new NamedRegExp('token',  '[0-9a-zA-Z\\!\\#\\$\\%\\&\'\\*\\+\\-\\.\\^_\\`\\|\\~]');
  const type = new NamedRegExp('type',  `${token}+`);
  const subtype = new NamedRegExp('subtype', `${token}+`);
  const mimeType = new NamedRegExp('mime-type', `${type}/${subtype}`);

  console.log(mimeType.exec('abc/def'));
  // console.log(
  //   mimeType,
  // );

  // const a = new RegExp().exec();
  // a.flags
}

