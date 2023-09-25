import { IParsedUint8ArrayErrorEndAstNode } from './parsed-uint8-array-error-end-ast-node.type';
import { printGenericParsedUint8ArrayErrorBuffer } from '../../../__shared__/ast/error/print/print-generic-parsed-uint8-array-error-buffer';

export function printParsedUint8ArrayErrorEnd(
  buffer: Uint8Array,
  node: IParsedUint8ArrayErrorEndAstNode,
): void {
  console.log(`%cend of buffer expected`, 'color: #ff2968');
  printGenericParsedUint8ArrayErrorBuffer(buffer, node);
}
