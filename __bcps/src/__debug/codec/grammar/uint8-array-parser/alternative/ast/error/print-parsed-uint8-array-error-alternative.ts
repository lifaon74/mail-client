import {
  IParsedUint8ArrayErrorAlternativeAstNode,
} from './parsed-uint8-array-error-alternative-ast-node.type';
import {
  IGenericParsedUint8ArrayErrorAstNode,
} from '../../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';

import { printGenericParsedUint8ArrayError } from '../../../__shared__/ast/error/print/print-generic-parsed-uint8-array-error';

export function printParsedUint8ArrayErrorAlternative(
  buffer: Uint8Array,
  {
    errors,
  }: IParsedUint8ArrayErrorAlternativeAstNode,
): void {
  console.log('alternative:');

  errors.forEach((error: IGenericParsedUint8ArrayErrorAstNode, index: number): void => {
    console.groupCollapsed(`[${index}]:`);
    printGenericParsedUint8ArrayError(buffer, error);
    console.groupEnd();
  });
}
