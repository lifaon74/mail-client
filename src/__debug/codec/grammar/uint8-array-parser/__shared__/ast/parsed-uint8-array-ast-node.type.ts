import { IAstNode } from '../../../../../../ast/__shared__/ast-node.type';

export interface IParsedUint8ArrayAstNode<GType extends string> extends IAstNode<GType> {
  readonly start: number;
  readonly end: number;
}

export type IGenericParsedUint8ArrayAstNode = IParsedUint8ArrayAstNode<string>;
