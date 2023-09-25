import { IUint8ArrayParser, IUint8ArrayParserResult } from '../../types/uint8-array-parser.type';
import { IGenericParsedUint8ArrayAstNode } from '../../__shared__/ast/parsed-uint8-array-ast-node.type';
import { isGenericParsedUint8ArrayErrorAstNode } from '../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';
import { ParsedUint8ArrayErrorConcat } from '../ast/error/parsed-uint8-array-error-concat';
import { ParsedUint8ArrayConcat } from '../ast/parsed-uint8-array-concat';

export function concatUint8ArrayParser(
  buffer: Uint8Array,
  index: number,
  expressions: readonly IUint8ArrayParser[],
): IUint8ArrayParserResult {
  const length: number = expressions.length;
  const children: IGenericParsedUint8ArrayAstNode[] = [];
  let _index: number = index;

  for (let i: number = 0; i < length; i++) {
    const result: IUint8ArrayParserResult = expressions[i](buffer, _index);

    if (isGenericParsedUint8ArrayErrorAstNode(result)) {
      return ParsedUint8ArrayErrorConcat(
        index,
        result.end,
        result,
        children,
      );
    } else {
      children.push(result);
      _index = result.end;
    }
  }

  return ParsedUint8ArrayConcat(
    index,
    _index,
    children,
  );
}
