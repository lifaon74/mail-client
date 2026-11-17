
import {
  IParsedUint8ArrayErrorAlternativeAstNode,
  ParsedUint8ArrayErrorAlternativeAstNodeType,
} from './parsed-uint8-array-error-alternative-ast-node.type';
import { IGenericParsedUint8ArrayErrorAstNode, ParsedUint8ArrayErrorAstNodeType } from '../../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';

export function ParsedUint8ArrayErrorAlternative(
  start: number,
  end: number,
  errors: readonly IGenericParsedUint8ArrayErrorAstNode[],
): IParsedUint8ArrayErrorAlternativeAstNode {
  return {
    __type__: ParsedUint8ArrayErrorAstNodeType,
    __subtype__: ParsedUint8ArrayErrorAlternativeAstNodeType,
    start,
    end,
    errors,
  };
}
