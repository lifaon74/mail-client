
import {
  IParsedUint8ArrayErrorConcatAstNode,
  ParsedUint8ArrayErrorConcatAstNodeType,
} from './parsed-uint8-array-error-concat-ast-node.type';
import { IGenericParsedUint8ArrayErrorAstNode, ParsedUint8ArrayErrorAstNodeType } from '../../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';
import { IGenericParsedUint8ArrayAstNode } from '../../../__shared__/ast/parsed-uint8-array-ast-node.type';

export function ParsedUint8ArrayErrorConcat(
  start: number,
  end: number,
  error: IGenericParsedUint8ArrayErrorAstNode,
  children: readonly IGenericParsedUint8ArrayAstNode[],
): IParsedUint8ArrayErrorConcatAstNode {
  return {
    __type__: ParsedUint8ArrayErrorAstNodeType,
    __subtype__: ParsedUint8ArrayErrorConcatAstNodeType,
    start,
    end,
    error,
    children,
  };
}
