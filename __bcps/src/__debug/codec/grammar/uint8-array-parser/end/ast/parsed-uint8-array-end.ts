import { IParsedUint8ArrayEndAstNode, ParsedUint8ArrayEndAstNodeType } from './parsed-uint8-array-end-ast-node.type';

export function ParsedUint8ArrayEnd(
  start: number,
  end: number,
): IParsedUint8ArrayEndAstNode {
  return {
    __type__: ParsedUint8ArrayEndAstNodeType,
    start,
    end,
  };
}
