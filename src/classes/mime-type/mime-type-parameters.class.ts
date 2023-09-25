import {
  IMimeTypeParameterListAstNode,
} from '../../ast/mime-type/fragments/mime-type-parameter-list/mime-type-parameter-list-ast-node.type';
import {
  createMimeTypeParameterListFromGenericInput,
  IMimeTypeParameterListGenericInput,
} from '../../ast/mime-type/fragments/mime-type-parameter-list/create/create-mime-type-parameter-list-from-generic-input';
import { serializeMimeTypeParameterList } from '../../ast/mime-type/fragments/mime-type-parameter-list/serialize-mime-type-parameter-list';
import { Dedup } from '../../types/dedup.type';
import {
  IMimeTypeParameterAstNode,
} from '../../ast/mime-type/fragments/mime-type-parameter-list/fragments/mime-type-parameter/mime-type-parameter-ast-node.type';
import {
  createMimeTypeParameterFromKeyValueStrings,
} from '../../ast/mime-type/fragments/mime-type-parameter-list/fragments/mime-type-parameter/create/create-mime-type-parameter-from-key-value-strings';

/** TYPES **/

export type IMimeTypeParametersInput = IMimeTypeParameterListGenericInput;

/** CLASS **/

export class MimeTypeParameters {
  #ast: IMimeTypeParameterListAstNode;

  constructor(
    input: IMimeTypeParametersInput,
  ) {
    this.#ast = createMimeTypeParameterListFromGenericInput(input);
  }

  /** ARRAY **/

  #getParameterIndex(
    key: string,
    fromIndex: number = 0,
  ): number {
    for (const l: number = this.#ast.items.length; fromIndex < l; fromIndex++) {
      const parameter: IMimeTypeParameterAstNode = this.#ast.items[fromIndex];
      if (parameter.key.value === key) {
        return fromIndex;
      }
    }
    return -1;
  }

  #getParameter(
    key: string,
    fromIndex?: number,
  ): IMimeTypeParameterAstNode | undefined {
    const index: number = this.#getParameterIndex(key, fromIndex);
    return (index === -1)
      ? void 0
      : this.#ast.items[index];
  }

  #setParameter(
    parameter: IMimeTypeParameterAstNode,
    dedup: Dedup = 'replace',
  ): void {
    const index: number = this.#getParameterIndex(parameter.key.value);
    if (index === -1) {
      this.#ast = {
        ...this.#ast,
        items: [
          ...this.#ast.items,
          parameter,
        ],
      };
    } else {
      if (dedup === 'throw') {
        throw new Error(`Parameter already exists`);
      } else if (dedup === 'replace') {
        this.#ast = {
          ...this.#ast,
          items: [
            ...this.#ast.items.slice(0, index),
            parameter,
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
    return this.#getParameterIndex(key) !== -1;
  }

  get(
    key: string,
  ): string | undefined {
    const parameter: IMimeTypeParameterAstNode | undefined = this.#getParameter(key);

    if (parameter === void 0) {
      return void 0;
    } else {
      return parameter!.value.value;
    }
  }

  set(
    key: string,
    value: string,
    dedup?: Dedup,
  ): void {
    this.#setParameter(
      createMimeTypeParameterFromKeyValueStrings(key, value),
      dedup,
    );
  }

  delete(
    key: string,
  ): boolean {
    const index: number = this.#getParameterIndex(key);
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
      const parameter: IMimeTypeParameterAstNode = this.#ast.items[i];

      yield [
        parameter.key.value,
        parameter.value.value,
      ];
    }
  }

  [Symbol.iterator](): IterableIterator<[string, string]> {
    return this.entries();
  }

  toAst(): IMimeTypeParameterListAstNode {
    return this.#ast;
  }

  toString(): string {
    return serializeMimeTypeParameterList(this.#ast);
  }
}

