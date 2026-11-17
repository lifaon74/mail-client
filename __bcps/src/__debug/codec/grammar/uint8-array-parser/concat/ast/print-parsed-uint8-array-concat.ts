import { IParsedUint8ArrayConcatAstNode } from './parsed-uint8-array-concat-ast-node.type';
import { printGenericParsedUint8Array } from '../../__shared__/ast/print-generic-parsed-uint8-array';
import { IGenericParsedUint8ArrayAstNode } from '../../__shared__/ast/parsed-uint8-array-ast-node.type';

export function printParsedUint8ArrayConcat(
  buffer: Uint8Array,
  {
    start,
    end,
    children,
  }: IParsedUint8ArrayConcatAstNode,
): void {
  console.log(`concat (${start}-${end}):`);
  children.forEach((node: IGenericParsedUint8ArrayAstNode, index: number): void => {
    console.groupCollapsed(`[${index}]:`);
    printGenericParsedUint8Array(buffer, node);
    console.groupEnd();
  });
}
