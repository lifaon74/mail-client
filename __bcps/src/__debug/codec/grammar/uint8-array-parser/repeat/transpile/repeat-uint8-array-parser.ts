import { IUint8ArrayParser, IUint8ArrayParserResult } from '../../types/uint8-array-parser.type';
import { IGenericParsedUint8ArrayAstNode } from '../../__shared__/ast/parsed-uint8-array-ast-node.type';
import {
  isGenericParsedUint8ArrayErrorAstNode,
  IGenericParsedUint8ArrayErrorAstNode,
} from '../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';
import { ParsedUint8ArrayErrorRepeat } from '../ast/error/parsed-uint8-array-error-repeat';
import { ParsedUint8ArrayRepeat } from '../ast/parsed-uint8-array-repeat';

export function repeatUint8ArrayParser(
  buffer: Uint8Array,
  index: number,
  expression: IUint8ArrayParser,
  min: number,
  max: number,
): IUint8ArrayParserResult {
  const children: IGenericParsedUint8ArrayAstNode[] = [];
  let error: IGenericParsedUint8ArrayErrorAstNode | undefined = void 0;
  let _index: number = index;

  for (let i: number = 0; i <= max; i++) {
    const result: IUint8ArrayParserResult = expression(buffer, _index);

    if (isGenericParsedUint8ArrayErrorAstNode(result)) {
      if ((min <= i) && (i <= max)) {
        error = result;
        break;
      } else {
        return ParsedUint8ArrayErrorRepeat(
          index,
          result.end,
          result,
        );
      }
    } else {
      children.push(result);
      if (result.end === _index) {
        break;
      } else {
        _index = result.end;
      }
    }
  }

  return ParsedUint8ArrayRepeat(
    index,
    _index,
    children,
    error,
  );
}
