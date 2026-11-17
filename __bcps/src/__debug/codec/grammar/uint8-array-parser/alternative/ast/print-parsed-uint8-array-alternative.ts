import { IParsedUint8ArrayAlternativeAstNode } from './parsed-uint8-array-alternative-ast-node.type';
import { printGenericParsedUint8Array } from '../../__shared__/ast/print-generic-parsed-uint8-array';

export function printParsedUint8ArrayAlternative(
  buffer: Uint8Array,
  {
    child,
  }: IParsedUint8ArrayAlternativeAstNode,
): void {
  console.log('alternative:');
  printGenericParsedUint8Array(buffer, child);
  // errors.forEach((error: IGenericParsedUint8ArrayAstNode, index: number): void => {
  //   console.groupCollapsed(`alternative - ${index}`);
  //   printGenericParsedUint8Array(buffer, child);
  //   console.groupEnd();
  // });
}
