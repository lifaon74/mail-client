
import { Dedup } from '../../types/dedup.type';
import { IEmailHeaderListAstNode } from '../../ast/email-header/email-header-list/email-header-list-ast-node.type';
import { IEmailHeaderAstNode } from '../../ast/email-header/email-header/email-header-ast-node.type';
import {
  IEmailHeaderListGenericInput,
  createEmailHeaderListFromGenericInput,
} from '../../ast/email-header/email-header-list/create/create-email-header-list-from-generic-input';
import {
  parseEmailHeaderFromKeyValueStrings
} from '../../ast/email-header/email-header/parse/parse-email-header-from-key-value-strings';
import { serializeEmailHeaderList } from '../../ast/email-header/email-header-list/serialize-email-header-list';
import { serializeEmailHeaderValue } from '../../ast/email-header/email-header/value/serialize-email-header-value';

/** TYPES **/

export type IEmailHeadersInput = IEmailHeaderListGenericInput;

/** CLASS **/

export class EmailHeaders {
  #ast: IEmailHeaderListAstNode;

  constructor(
    input: IEmailHeadersInput,
  ) {
    this.#ast = createEmailHeaderListFromGenericInput(input);
  }

  /** ARRAY **/

  #getHeaderIndex(
    key: string,
    fromIndex: number = 0,
  ): number {
    for (const l: number = this.#ast.items.length; fromIndex < l; fromIndex++) {
      const header: IEmailHeaderAstNode = this.#ast.items[fromIndex];
      if (header.key === key) {
        return fromIndex;
      }
    }
    return -1;
  }

  #getHeader(
    key: string,
    fromIndex?: number,
  ): IEmailHeaderAstNode | undefined {
    const index: number = this.#getHeaderIndex(key, fromIndex);
    return (index === -1)
      ? void 0
      : this.#ast.items[index];
  }

  #setHeader(
    header: IEmailHeaderAstNode,
    dedup: Dedup = 'replace',
  ): void {
    const index: number = this.#getHeaderIndex(header.key);
    if (index === -1) {
      this.#ast = {
        ...this.#ast,
        items: [
          ...this.#ast.items,
          header,
        ],
      };
    } else {
      if (dedup === 'throw') {
        throw new Error(`Header already exists`);
      } else if (dedup === 'replace') {
        this.#ast = {
          ...this.#ast,
          items: [
            ...this.#ast.items.slice(0, index),
            header,
            ...this.#ast.items.slice(index + 1),
          ],
        };
      } // skip => do nothing
    }
  }

  /** MAP **/

  get size(): number {
    return this.#ast.items.length;
  }

  has(
    key: string,
  ): boolean {
    return this.#getHeaderIndex(key) !== -1;
  }

  get(
    key: string,
  ): string | undefined {
    const header: IEmailHeaderAstNode | undefined = this.#getHeader(key);

    if (header === void 0) {
      return void 0;
    } else {
      return serializeEmailHeaderValue(header!.value);
    }
  }

  set(
    key: string,
    value: string,
    dedup?: Dedup,
  ): void {
    this.#setHeader(
      parseEmailHeaderFromKeyValueStrings(key, value),
      dedup,
    );
  }

  delete(
    key: string,
  ): boolean {
    const index: number = this.#getHeaderIndex(key);
    if (index === -1) {
      return false;
    } else {
      this.#ast = {
        ...this.#ast,
        items: [
          ...this.#ast.items.slice(0, index),
          ...this.#ast.items.slice(index + 1),
        ],
      };
      return true;
    }
  }

  clear(): void {
    this.#ast = {
      ...this.#ast,
      items: [],
    };
  }

  * entries(): IterableIterator<[string, string]> {
    for (let i: number = 0, l: number = this.#ast.items.length; i < l; i++) {
      const header: IEmailHeaderAstNode = this.#ast.items[i];

      yield [
        header.key,
        serializeEmailHeaderValue(header.value),
      ];
    }
  }

  [Symbol.iterator](): IterableIterator<[string, string]> {
    return this.entries();
  }

  toAst(): IEmailHeaderListAstNode {
    return this.#ast;
  }

  toString(): string {
    return serializeEmailHeaderList(this.#ast);
  }

  // /** BUILT-IN **/
  //
  // /* DATE */
  //
  // get date(): Date | undefined {
  //   return
  // }
}

