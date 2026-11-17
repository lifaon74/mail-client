import {
  IParsedUint8ArrayConcatAstNode,
  ParsedUint8ArrayConcatAstNodeType,
} from './parsed-uint8-array-concat-ast-node.type';
import { IGenericParsedUint8ArrayAstNode } from '../../__shared__/ast/parsed-uint8-array-ast-node.type';

export function ParsedUint8ArrayConcat(
  start: number,
  end: number,
  children: readonly IGenericParsedUint8ArrayAstNode[],
): IParsedUint8ArrayConcatAstNode {
  return {
    __type__: ParsedUint8ArrayConcatAstNodeType,
    start,
    end,
    children,
  };
}
