import {
  IParsedUint8ArrayRuleAstNode,
  ParsedUint8ArrayRuleAstNodeType,
} from './parsed-uint8-array-rule-ast-node.type';
import { IGenericParsedUint8ArrayAstNode } from '../../__shared__/ast/parsed-uint8-array-ast-node.type';

export function ParsedUint8ArrayRule(
  start: number,
  end: number,
  name: string,
  child: IGenericParsedUint8ArrayAstNode,
): IParsedUint8ArrayRuleAstNode {
  return {
    __type__: ParsedUint8ArrayRuleAstNodeType,
    start,
    end,
    name,
    child,
  };
}
