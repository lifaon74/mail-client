import { IMimeTypeAstNode } from '../../ast/mime-type/mime-type-ast-node.type';
import { parseMimeType } from '../../ast/mime-type/parse-mime-type';
import { serializeMimeType } from '../../ast/mime-type/serialize-mime-type';
import { MimeTypeParameters } from './mime-type-parameters.class';
import { serializeMimeTypeType } from '../../ast/mime-type/fragments/mime-type-type/serialize-mime-type-type';
import { serializeMimeTypeSubtype } from '../../ast/mime-type/fragments/mime-type-subtype/serialize-mime-type-subtype';
import { parseMimeTypeSubtype } from '../../ast/mime-type/fragments/mime-type-subtype/parse-mime-type-subtype';
import { parseMimeTypeType } from '../../ast/mime-type/fragments/mime-type-type/parse-mime-type-type';

/** CLASS **/

export class MimeTypeClass {
  #ast: IMimeTypeAstNode;
  readonly #parameters: MimeTypeParameters;

  constructor(
    input: string,
  ) {
    this.#ast = parseMimeType(input);
    this.#parameters = new MimeTypeParameters(this.#ast.parameters);
  }

  get type(): string {
    return serializeMimeTypeType(this.#ast.type);
  }

  set type(
    input: string,
  ) {
    this.#ast = {
      ...this.#ast,
      type: parseMimeTypeType(input),
    };
  }

  get subtype(): string {
    return serializeMimeTypeSubtype(this.#ast.subtype);
  }

  set subtype(
    input: string,
  ) {
    this.#ast = {
      ...this.#ast,
      subtype: parseMimeTypeSubtype(input),
    };
  }

  get typeAndSubtype(): string {
    return `${this.type}/${this.subtype}`;
  }

  get parameters(): MimeTypeParameters {
    return this.#parameters;
  }

  toAst(): IMimeTypeAstNode {
    return {
      ...this.#ast,
      parameters: this.#parameters.toAst(),
    };
  }

  toString(): string {
    return serializeMimeType(this.toAst());
  }
}
