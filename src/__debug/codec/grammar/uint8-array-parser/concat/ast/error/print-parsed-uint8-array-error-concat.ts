import {
  IParsedUint8ArrayErrorConcatAstNode,
} from './parsed-uint8-array-error-concat-ast-node.type';

import { printGenericParsedUint8ArrayError } from '../../../__shared__/ast/error/print/print-generic-parsed-uint8-array-error';
import { IGenericParsedUint8ArrayAstNode } from '../../../__shared__/ast/parsed-uint8-array-ast-node.type';
import { printGenericParsedUint8Array } from '../../../__shared__/ast/print-generic-parsed-uint8-array';

export function printParsedUint8ArrayErrorConcat(
  buffer: Uint8Array,
  {
    start,
    end,
    error,
    children,
  }: IParsedUint8ArrayErrorConcatAstNode,
): void {
  console.log(`[ERR] concat (${start}-${end}):`);

  children.forEach((node: IGenericParsedUint8ArrayAstNode, index: number): void => {
    console.groupCollapsed(`[${index}]:`);
    printGenericParsedUint8Array(buffer, node);
    console.groupEnd();
  });

  console.group(`%c[error]`, 'color: red');
  printGenericParsedUint8ArrayError(buffer, error);
  console.groupEnd();
}
