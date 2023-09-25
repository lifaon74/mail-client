import {
  IParsedUint8ArrayRepeatAstNode,
  ParsedUint8ArrayRepeatAstNodeType,
} from './parsed-uint8-array-repeat-ast-node.type';
import { IGenericParsedUint8ArrayAstNode } from '../../__shared__/ast/parsed-uint8-array-ast-node.type';
import { IGenericParsedUint8ArrayErrorAstNode } from '../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';

export function ParsedUint8ArrayRepeat(
  start: number,
  end: number,
  children: readonly IGenericParsedUint8ArrayAstNode[],
  error: IGenericParsedUint8ArrayErrorAstNode | undefined,
): IParsedUint8ArrayRepeatAstNode {
  return {
    __type__: ParsedUint8ArrayRepeatAstNodeType,
    start,
    end,
    children,
    error,
  };
}
