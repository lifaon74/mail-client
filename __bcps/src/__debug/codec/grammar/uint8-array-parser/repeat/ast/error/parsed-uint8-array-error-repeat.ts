
import {
  IParsedUint8ArrayErrorRepeatAstNode,
  ParsedUint8ArrayErrorRepeatAstNodeType,
} from './parsed-uint8-array-error-repeat-ast-node.type';
import { IGenericParsedUint8ArrayErrorAstNode, ParsedUint8ArrayErrorAstNodeType } from '../../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';

export function ParsedUint8ArrayErrorRepeat(
  start: number,
  end: number,
  error: IGenericParsedUint8ArrayErrorAstNode,
): IParsedUint8ArrayErrorRepeatAstNode {
  return {
    __type__: ParsedUint8ArrayErrorAstNodeType,
    __subtype__: ParsedUint8ArrayErrorRepeatAstNodeType,
    start,
    end,
    error,
  };
}
