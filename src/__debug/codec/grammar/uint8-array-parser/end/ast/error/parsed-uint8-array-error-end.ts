
import {
  IParsedUint8ArrayErrorEndAstNode,
  ParsedUint8ArrayErrorEndAstNodeType,
} from './parsed-uint8-array-error-end-ast-node.type';
import { IGenericParsedUint8ArrayErrorAstNode, ParsedUint8ArrayErrorAstNodeType } from '../../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';

export function ParsedUint8ArrayErrorEnd(
  start: number,
  end: number,
): IParsedUint8ArrayErrorEndAstNode {
  return {
    __type__: ParsedUint8ArrayErrorAstNodeType,
    __subtype__: ParsedUint8ArrayErrorEndAstNodeType,
    start,
    end,
  };
}
