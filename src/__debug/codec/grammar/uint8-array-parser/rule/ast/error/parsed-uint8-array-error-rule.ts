
import {
  IParsedUint8ArrayErrorRuleAstNode,
  ParsedUint8ArrayErrorRuleAstNodeType,
} from './parsed-uint8-array-error-rule-ast-node.type';
import { IGenericParsedUint8ArrayErrorAstNode, ParsedUint8ArrayErrorAstNodeType } from '../../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';

export function ParsedUint8ArrayErrorRule(
  start: number,
  end: number,
  name: string,
  error: IGenericParsedUint8ArrayErrorAstNode,
): IParsedUint8ArrayErrorRuleAstNode {
  return {
    __type__: ParsedUint8ArrayErrorAstNodeType,
    __subtype__: ParsedUint8ArrayErrorRuleAstNodeType,
    start,
    end,
    name,
    error,
  };
}
