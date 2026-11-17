import { IParsedUint8ArrayErrorRuleAstNode } from './parsed-uint8-array-error-rule-ast-node.type';

import { printGenericParsedUint8ArrayError } from '../../../__shared__/ast/error/print/print-generic-parsed-uint8-array-error';

export function printParsedUint8ArrayErrorRule(
  buffer: Uint8Array,
  {
    name,
    error,
  }: IParsedUint8ArrayErrorRuleAstNode,
): void {
  console.groupCollapsed(`in rule: %c${name}`, 'color: #785dfc');
  printGenericParsedUint8ArrayError(buffer, error);
  console.groupEnd();
}
