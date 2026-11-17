import { IParsedUint8ArrayEndAstNode } from './parsed-uint8-array-end-ast-node.type';

export function printParsedUint8ArrayEnd(
  buffer: Uint8Array,
  node: IParsedUint8ArrayEndAstNode,
): void {
  console.log(`%cEND`, 'color: #06ab00');
}
