import {
  IGrammarByteSequenceComparisonAstNode,
} from '../../ast/grammar-byte-sequence-comparison/grammar-byte-sequence-comparison-ast-node.type';
import { INextFunction } from '../../next-function/next-function.type';
import { onceNextFunction } from '../../next-function/once-next-function';
import {
  IGrammarByteComparisonExpressionAstNode,
} from '../../ast/grammar-byte-sequence-comparison/comparisons/grammar-byte-comparison-expression-ast-node.type';
import { execGrammarByteComparisonExpression } from './comparisions/exec-grammar-byte-comparison-expression';

import { IExecResultByteSequence } from './exec-result-byte-sequence.type';

export function execGrammarByteSequenceComparison(
  node: IGrammarByteSequenceComparisonAstNode,
  buffer: Uint8Array,
  index: number,
): INextFunction<IExecResultByteSequence> {
  return onceNextFunction((): IExecResultByteSequence | null => {
    const expressions: readonly IGrammarByteComparisonExpressionAstNode[] = node.expressions;
    const length: number = expressions.length;

    if (buffer.length >= length) {
      for (let i: number = 0, j: number = index; i < length; i++, j++) {
        if (!execGrammarByteComparisonExpression(expressions[i], buffer[j])) {
          return null;
        }
      }

      return {
        __type__: 'byte-sequence',
        start: index,
        end: index + length,
      };
    } else {
      return null;
    }
  });
}
