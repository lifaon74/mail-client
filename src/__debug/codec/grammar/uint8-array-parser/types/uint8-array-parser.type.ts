import { IGenericParsedUint8ArrayAstNode } from '../__shared__/ast/parsed-uint8-array-ast-node.type';
import { IGenericParsedUint8ArrayErrorAstNode } from '../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';

export type IUint8ArrayParserResult =
  | IGenericParsedUint8ArrayAstNode
  | IGenericParsedUint8ArrayErrorAstNode
  ;

export interface IUint8ArrayParser {
  (
    buffer: Uint8Array,
    index: number,
  ): IUint8ArrayParserResult;
}
