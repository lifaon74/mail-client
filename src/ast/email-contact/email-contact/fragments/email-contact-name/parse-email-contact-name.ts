import { IEmailContactNameAstNode, EmailContactNameAstNodeType } from './email-contact-name-ast-node.type';

/** FUNCTION **/

export function parseEmailContactName(
  input: string,
): IEmailContactNameAstNode {
  // TODO
  return {
    __type__: EmailContactNameAstNodeType,
    value: input,
  };
}


/*
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
 */
