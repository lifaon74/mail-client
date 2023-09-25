import {
  IParsedUint8ArrayErrorByteSequenceComparisonAstNode,
} from './parsed-uint8-array-error-byte-sequence-comparison-ast-node.type';
import {
  printGenericParsedUint8ArrayErrorBuffer,
} from '../../../__shared__/ast/error/print/print-generic-parsed-uint8-array-error-buffer';

export function printGrammarByteSequenceComparisonError(
  buffer: Uint8Array,
  node: IParsedUint8ArrayErrorByteSequenceComparisonAstNode,
): void {
  printGenericParsedUint8ArrayErrorBuffer(buffer, node);
}
