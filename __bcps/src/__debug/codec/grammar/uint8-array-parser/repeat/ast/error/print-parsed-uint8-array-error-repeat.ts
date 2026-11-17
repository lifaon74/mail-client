import {
  IParsedUint8ArrayErrorRepeatAstNode,
} from './parsed-uint8-array-error-repeat-ast-node.type';

import { printGenericParsedUint8ArrayError } from '../../../__shared__/ast/error/print/print-generic-parsed-uint8-array-error';

export function printParsedUint8ArrayErrorRepeat(
  buffer: Uint8Array,
  {
    start,
    end,
    error,
  }: IParsedUint8ArrayErrorRepeatAstNode,
): void {
  console.groupCollapsed(`[ERR] repeat (${start}-${end}):`);
  printGenericParsedUint8ArrayError(buffer, error);
  console.groupEnd();
}
