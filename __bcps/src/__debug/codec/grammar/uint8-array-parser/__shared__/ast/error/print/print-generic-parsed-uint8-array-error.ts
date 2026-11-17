import {
  IGenericParsedUint8ArrayErrorAstNode,
} from '../parsed-uint8-array-error-ast-node.type';
import {
  isParsedUint8ArrayErrorAlternativeAstNode,
} from '../../../../alternative/ast/error/parsed-uint8-array-error-alternative-ast-node.type';
import {
  printParsedUint8ArrayErrorAlternative,
} from '../../../../alternative/ast/error/print-parsed-uint8-array-error-alternative';
import {
  isParsedUint8ArrayErrorByteSequenceComparisonAstNode,
} from '../../../../byte-sequence-comparison/ast/error/parsed-uint8-array-error-byte-sequence-comparison-ast-node.type';
import {
  printGrammarByteSequenceComparisonError,
} from '../../../../byte-sequence-comparison/ast/error/print-grammar-byte-sequence-comparison-error';
import {
  isParsedUint8ArrayErrorConcatAstNode,
} from '../../../../concat/ast/error/parsed-uint8-array-error-concat-ast-node.type';
import { printParsedUint8ArrayErrorConcat } from '../../../../concat/ast/error/print-parsed-uint8-array-error-concat';
import {
  isParsedUint8ArrayErrorRepeatAstNode,
} from '../../../../repeat/ast/error/parsed-uint8-array-error-repeat-ast-node.type';
import { printParsedUint8ArrayErrorRepeat } from '../../../../repeat/ast/error/print-parsed-uint8-array-error-repeat';
import {
  isParsedUint8ArrayErrorRuleAstNode,
} from '../../../../rule/ast/error/parsed-uint8-array-error-rule-ast-node.type';
import { printParsedUint8ArrayErrorRule } from '../../../../rule/ast/error/print-parsed-uint8-array-error-rule';
import { printParsedUint8ArrayErrorEnd } from '../../../../end/ast/error/print-parsed-uint8-array-error-end';
import { isParsedUint8ArrayErrorEndAstNode } from '../../../../end/ast/error/parsed-uint8-array-error-end-ast-node.type';

export function printGenericParsedUint8ArrayError(
  buffer: Uint8Array,
  node: IGenericParsedUint8ArrayErrorAstNode,
): void {
  if (isParsedUint8ArrayErrorAlternativeAstNode(node)) {
    printParsedUint8ArrayErrorAlternative(buffer, node);
  } else if (isParsedUint8ArrayErrorByteSequenceComparisonAstNode(node)) {
    printGrammarByteSequenceComparisonError(buffer, node);
  } else if (isParsedUint8ArrayErrorConcatAstNode(node)) {
    printParsedUint8ArrayErrorConcat(buffer, node);
  } else if (isParsedUint8ArrayErrorEndAstNode(node)) {
    printParsedUint8ArrayErrorEnd(buffer, node);
  } else if (isParsedUint8ArrayErrorRepeatAstNode(node)) {
    printParsedUint8ArrayErrorRepeat(buffer, node);
  } else if (isParsedUint8ArrayErrorRuleAstNode(node)) {
    printParsedUint8ArrayErrorRule(buffer, node);
  } else {
    throw new Error(`Unknown node: ${(node as IGenericParsedUint8ArrayErrorAstNode).__type__}`);
  }
}
