import { IUint8ArrayParser, IUint8ArrayParserResult } from '../../types/uint8-array-parser.type';
import {
  IGenericParsedUint8ArrayErrorAstNode,
  isGenericParsedUint8ArrayErrorAstNode,
} from '../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';
import { ParsedUint8ArrayAlternative } from '../ast/parsed-uint8-array-alternative';
import { ParsedUint8ArrayErrorAlternative } from '../ast/error/parsed-uint8-array-error-alternative';
import { IParsedUint8ArrayAlternativeAstNode } from '../ast/parsed-uint8-array-alternative-ast-node.type';

export function alternativeUint8ArrayParser(
  buffer: Uint8Array,
  index: number,
  expressions: readonly IUint8ArrayParser[],
): IUint8ArrayParserResult {
  const length: number = expressions.length;
  const errors: IGenericParsedUint8ArrayErrorAstNode[] = new Array<IGenericParsedUint8ArrayErrorAstNode>(length);

  for (let i: number = 0; i < length; i++) {
    const result: IUint8ArrayParserResult = expressions[i](buffer, index);

    if (isGenericParsedUint8ArrayErrorAstNode(result)) {
      errors[i] = result;
    } else {
      return ParsedUint8ArrayAlternative(
        index,
        result.end,
        result,
      );
    }
  }

  return ParsedUint8ArrayErrorAlternative(
    index,
    index + 1, // TODO maybe errors(max(error.end))
    errors,
  );
}

// export function alternativeUint8ArrayParser(
//   buffer: Uint8Array,
//   index: number,
//   expressions: readonly IUint8ArrayParser[],
// ): IUint8ArrayParserResult {
//   const length: number = expressions.length;
//   const errors: IGenericParsedUint8ArrayErrorAstNode[] = new Array<IGenericParsedUint8ArrayErrorAstNode>(length);
//   const alternatives: IParsedUint8ArrayAlternativeAstNode[] = [];
//
//   for (let i: number = 0; i < length; i++) {
//     const result: IUint8ArrayParserResult = expressions[i](buffer, index);
//
//     if (isGenericParsedUint8ArrayErrorAstNode(result)) {
//       errors[i] = result;
//     } else {
//       alternatives.push(
//         ParsedUint8ArrayAlternative(
//           index,
//           result.end,
//           result,
//         ),
//       );
//     }
//   }
//
//   if (alternatives.length === 0) {
//     return ParsedUint8ArrayErrorAlternative(
//       index,
//       index + 1, // TODO maybe errors(max(error.end))
//       errors,
//     );
//   } else if (alternatives.length === 1) {
//     return alternatives[0];
//   } else {
//     throw new Error(`Many alternatives are possible`);
//   }
// }



