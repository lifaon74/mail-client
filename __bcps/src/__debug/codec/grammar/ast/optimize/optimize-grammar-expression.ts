import { isGrammarConcatAstNode } from '../grammar-concat/grammar-concat-ast-node.type';
import { isGrammarAlternativeAstNode } from '../grammar-alternative/grammar-alternative-ast-node.type';
import { isGrammarRuleIdentifierAstNode } from '../grammar-rule-identifier/grammar-rule-identifier-ast-node.type';
import { optimizeGrammarConcat } from './optimize-grammar-concat';
import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';
import { optimizeGrammarAlternative } from './optimize-grammar-alternative';
import { optimizeGrammarRepeat } from './optimize-grammar-repeat';
import { isGrammarRepeatAstNode } from '../grammar-repeat/grammar-repeat-ast-node.type';
import { optimizeGrammarRuleIdentifier } from './optimize-grammar-rule-identifier';
import { isGrammarByteSequenceComparisonAstNode } from '../grammar-byte-sequence-comparison/grammar-byte-sequence-comparison-ast-node.type';
import { optimizeGrammarByteSequenceComparison } from './grammar-byte-sequence-comparison/optimize-grammar-byte-sequence-comparison';
import { IGrammarRulesMap } from './types/grammar-rules-map.type';
import { isGrammarEndAstNode } from '../grammar-end/grammar-end-ast-node.type';
import { optimizeGrammarEnd } from './optimize-grammar-end';

export function optimizeGrammarExpression(
  node: IGrammarExpressionAstNode,
  rules: IGrammarRulesMap,
): IGrammarExpressionAstNode {
  if (isGrammarAlternativeAstNode(node)) {
    return optimizeGrammarAlternative(node, rules);
  } else if (isGrammarByteSequenceComparisonAstNode(node)) {
    return optimizeGrammarByteSequenceComparison(node);
  } else if (isGrammarConcatAstNode(node)) {
    return optimizeGrammarConcat(node, rules);
  } else if (isGrammarEndAstNode(node)) {
    return optimizeGrammarEnd(node);
  } else if (isGrammarRepeatAstNode(node)) {
    return optimizeGrammarRepeat(node, rules);
  } else if (isGrammarRuleIdentifierAstNode(node)) {
    return optimizeGrammarRuleIdentifier(node, rules);
  } else {
    throw new Error(`Unknown node: ${(node as IGrammarExpressionAstNode).__type__}`);
  }
}
