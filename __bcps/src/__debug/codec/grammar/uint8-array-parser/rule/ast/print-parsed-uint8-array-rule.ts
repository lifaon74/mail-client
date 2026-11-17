import { IParsedUint8ArrayRuleAstNode } from './parsed-uint8-array-rule-ast-node.type';
import { printGenericParsedUint8Array } from '../../__shared__/ast/print-generic-parsed-uint8-array';

export function printParsedUint8ArrayRule(
  buffer: Uint8Array,
  {
    name,
    child,
  }: IParsedUint8ArrayRuleAstNode,
): void {
  console.groupCollapsed(`in rule: %c${name}`, 'color: #785dfc');
  printGenericParsedUint8Array(buffer, child);
  console.groupEnd();
}
