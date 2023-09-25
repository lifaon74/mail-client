import { IParsedUint8ArrayRepeatAstNode } from './parsed-uint8-array-repeat-ast-node.type';
import { printGenericParsedUint8Array } from '../../__shared__/ast/print-generic-parsed-uint8-array';
import { IGenericParsedUint8ArrayAstNode } from '../../__shared__/ast/parsed-uint8-array-ast-node.type';
import { printGenericParsedUint8ArrayError } from '../../__shared__/ast/error/print/print-generic-parsed-uint8-array-error';

export function printParsedUint8ArrayRepeat(
  buffer: Uint8Array,
  {
    start,
    end,
    children,
    error,
  }: IParsedUint8ArrayRepeatAstNode,
): void {
  console.log(`repeat (${start}-${end}):`);

  children.forEach((node: IGenericParsedUint8ArrayAstNode, index: number): void => {
    console.groupCollapsed(`[${index}]:`);
    printGenericParsedUint8Array(buffer, node);
    console.groupEnd();
  });

  if (error !== void 0) {
    console.groupCollapsed(`%c[error]`, 'color: red');
    printGenericParsedUint8ArrayError(buffer, error);
    console.groupEnd();
  }
}
