import { IGenericParsedUint8ArrayErrorAstNode } from '../parsed-uint8-array-error-ast-node.type';
import { printErroredUint8ArrayBuffer } from './print-errored-uint8-array-buffer';

export function printGenericParsedUint8ArrayErrorBuffer(
  buffer: Uint8Array,
  {
    start,
    end,
  }: IGenericParsedUint8ArrayErrorAstNode,
): void {
  printErroredUint8ArrayBuffer(
    buffer,
    start,
    end,
  );
}
