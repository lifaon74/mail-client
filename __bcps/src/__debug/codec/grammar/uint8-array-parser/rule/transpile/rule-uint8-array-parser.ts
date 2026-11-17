import { IUint8ArrayParser, IUint8ArrayParserResult } from '../../types/uint8-array-parser.type';
import { isGenericParsedUint8ArrayErrorAstNode } from '../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';
import { ParsedUint8ArrayErrorRule } from '../ast/error/parsed-uint8-array-error-rule';
import { ParsedUint8ArrayRule } from '../ast/parsed-uint8-array-rule';

export function ruleUint8ArrayParser(
  buffer: Uint8Array,
  index: number,
  name: string,
  expression: IUint8ArrayParser,
): IUint8ArrayParserResult {
  const result: IUint8ArrayParserResult = expression(buffer, index);

  if (isGenericParsedUint8ArrayErrorAstNode(result)) {
    return ParsedUint8ArrayErrorRule(
      index,
      result.end,
      name,
      result,
    );
  } else {
    return ParsedUint8ArrayRule(
      index,
      result.end,
      name,
      result,
    );
  }
}
