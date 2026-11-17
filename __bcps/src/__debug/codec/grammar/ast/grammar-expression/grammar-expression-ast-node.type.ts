import { IGrammarAlternativeAstNode, isGrammarAlternativeAstNode } from '../grammar-alternative/grammar-alternative-ast-node.type';
import { IGrammarConcatAstNode, isGrammarConcatAstNode } from '../grammar-concat/grammar-concat-ast-node.type';
import {
  IGrammarRuleIdentifierAstNode,
  isGrammarRuleIdentifierAstNode,
} from '../grammar-rule-identifier/grammar-rule-identifier-ast-node.type';
import { IGrammarRepeatAstNode, isGrammarRepeatAstNode } from '../grammar-repeat/grammar-repeat-ast-node.type';
import {
  IGrammarByteSequenceComparisonAstNode,
  isGrammarByteSequenceComparisonAstNode,
} from '../grammar-byte-sequence-comparison/grammar-byte-sequence-comparison-ast-node.type';
import { IGrammarEndAstNode, isGrammarEndAstNode } from '../grammar-end/grammar-end-ast-node.type';

export type IGrammarExpressionAstNode =
  | IGrammarAlternativeAstNode
  | IGrammarByteSequenceComparisonAstNode
  | IGrammarConcatAstNode
  | IGrammarEndAstNode
  | IGrammarRepeatAstNode
  | IGrammarRuleIdentifierAstNode
  ;

export function isGrammarExpressionAstNode(
  input: object,
): input is IGrammarExpressionAstNode {
  return isGrammarAlternativeAstNode(input)
    || isGrammarByteSequenceComparisonAstNode(input)
    || isGrammarConcatAstNode(input)
    || isGrammarEndAstNode(input)
    || isGrammarRepeatAstNode(input)
    || isGrammarRuleIdentifierAstNode(input)
    ;
}

