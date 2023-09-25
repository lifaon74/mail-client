import { GrammarByteSequence } from './grammar-byte-sequence';
import { IGrammarByteSequenceComparisonAstNode } from '../grammar-byte-sequence-comparison-ast-node.type';

export function GrammarString(
  input: string,
): IGrammarByteSequenceComparisonAstNode {
  return GrammarByteSequence(
    new TextEncoder().encode(input),
  );
}



