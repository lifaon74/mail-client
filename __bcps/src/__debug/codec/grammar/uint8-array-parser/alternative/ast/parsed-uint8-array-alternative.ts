import {
  IParsedUint8ArrayAlternativeAstNode,
  ParsedUint8ArrayAlternativeAstNodeType,
} from './parsed-uint8-array-alternative-ast-node.type';
import { IGenericParsedUint8ArrayAstNode } from '../../__shared__/ast/parsed-uint8-array-ast-node.type';

export function ParsedUint8ArrayAlternative(
  start: number,
  end: number,
  child: IGenericParsedUint8ArrayAstNode,
): IParsedUint8ArrayAlternativeAstNode {
  return {
    __type__: ParsedUint8ArrayAlternativeAstNodeType,
    start,
    end,
    child,
  };
}
