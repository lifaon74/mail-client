import { IGenericParsedUint8ArrayAstNode } from './parsed-uint8-array-ast-node.type';
import { isParsedUint8ArrayAlternativeAstNode } from '../../alternative/ast/parsed-uint8-array-alternative-ast-node.type';
import {
  isParsedUint8ArrayByteSequenceComparisonAstNode
} from '../../byte-sequence-comparison/ast/parsed-uint8-array-byte-sequence-comparison-ast-node.type';
import { isParsedUint8ArrayConcatAstNode } from '../../concat/ast/parsed-uint8-array-concat-ast-node.type';
import { isParsedUint8ArrayEndAstNode } from '../../end/ast/parsed-uint8-array-end-ast-node.type';
import { isParsedUint8ArrayRepeatAstNode } from '../../repeat/ast/parsed-uint8-array-repeat-ast-node.type';
import { isParsedUint8ArrayRuleAstNode } from '../../rule/ast/parsed-uint8-array-rule-ast-node.type';
import { isGenericParsedUint8ArrayErrorAstNode } from './error/parsed-uint8-array-error-ast-node.type';
import { printGenericParsedUint8ArrayError } from './error/print/print-generic-parsed-uint8-array-error';
import { printParsedUint8ArrayRule } from '../../rule/ast/print-parsed-uint8-array-rule';
import { printParsedUint8ArrayAlternative } from '../../alternative/ast/print-parsed-uint8-array-alternative';
import { printGrammarByteSequenceComparison } from '../../byte-sequence-comparison/ast/print-grammar-byte-sequence-comparison';
import { printParsedUint8ArrayConcat } from '../../concat/ast/print-parsed-uint8-array-concat';
import { printParsedUint8ArrayRepeat } from '../../repeat/ast/print-parsed-uint8-array-repeat';
import { printParsedUint8ArrayEnd } from '../../end/ast/print-parsed-uint8-array-end';

export function printGenericParsedUint8Array(
  buffer: Uint8Array,
  node: IGenericParsedUint8ArrayAstNode,
): void {
  if (isParsedUint8ArrayAlternativeAstNode(node)) {
    printParsedUint8ArrayAlternative(buffer, node);
  } else if (isParsedUint8ArrayByteSequenceComparisonAstNode(node)) {
    printGrammarByteSequenceComparison(buffer, node);
  } else if (isParsedUint8ArrayConcatAstNode(node)) {
    printParsedUint8ArrayConcat(buffer, node);
  } else if (isParsedUint8ArrayEndAstNode(node)) {
     printParsedUint8ArrayEnd(buffer, node);
  } else if (isParsedUint8ArrayRepeatAstNode(node)) {
     printParsedUint8ArrayRepeat(buffer, node);
  } else if (isParsedUint8ArrayRuleAstNode(node)) {
    printParsedUint8ArrayRule(buffer, node);
  } else if (isGenericParsedUint8ArrayErrorAstNode(node)) {
    printGenericParsedUint8ArrayError(buffer, node);
  } else {
    throw new Error(`Unknown node: ${(node as IGenericParsedUint8ArrayAstNode).__type__}`);
  }
}
