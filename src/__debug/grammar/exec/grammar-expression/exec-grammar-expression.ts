import { IGrammarExpressionAstNode } from '../../ast/grammar-expression/grammar-expression-ast-node.type';
import { IReadonlyGrammarRulesMap } from '../../ast/grammar/grammar-rules-map.type';
import { INextFunction } from '../../next-function/next-function.type';
import { IExecResultExpression } from './exec-result-expression.type';
import { isGrammarAlternativeAstNode } from '../../ast/grammar-alternative/grammar-alternative-ast-node.type';
import { execGrammarAlternative } from '../grammar-alternative/exec-grammar-alternative';
import {
  isGrammarByteSequenceComparisonAstNode,
} from '../../ast/grammar-byte-sequence-comparison/grammar-byte-sequence-comparison-ast-node.type';
import { execGrammarByteSequenceComparison } from '../grammar-byte-sequence-comparison/exec-grammar-byte-sequence-comparison';
import { isGrammarConcatAstNode } from '../../ast/grammar-concat/grammar-concat-ast-node.type';
import { execGrammarConcat } from '../grammar-concat/exec-grammar-concat';
import { isGrammarEndAstNode } from '../../ast/grammar-end/grammar-end-ast-node.type';
import { execGrammarEnd } from '../grammar-end/exec-grammar-end';
import { isGrammarRepeatAstNode } from '../../ast/grammar-repeat/grammar-repeat-ast-node.type';
import { execGrammarRepeat } from '../grammar-repeat/exec-grammar-repeat';
import { isGrammarRuleIdentifierAstNode } from '../../ast/grammar-rule-identifier/grammar-rule-identifier-ast-node.type';
import { execGrammarRuleIdentifier } from '../grammar-identifier/exec-grammar-rule-identifier';

export function execGrammarExpression(
  node: IGrammarExpressionAstNode,
  rules: IReadonlyGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
): INextFunction<IExecResultExpression> {
  if (isGrammarAlternativeAstNode(node)) {
    return execGrammarAlternative(
      node,
      rules,
      buffer,
      index,
    );
  } else if (isGrammarByteSequenceComparisonAstNode(node)) {
    return execGrammarByteSequenceComparison(
      node,
      buffer,
      index,
    );
  } else if (isGrammarConcatAstNode(node)) {
    return execGrammarConcat(
      node,
      rules,
      buffer,
      index,
    );
  } else if (isGrammarEndAstNode(node)) {
    return execGrammarEnd(
      buffer,
      index,
    );
  } else if (isGrammarRepeatAstNode(node)) {
    return execGrammarRepeat(
      node,
      rules,
      buffer,
      index,
    );
  } else if (isGrammarRuleIdentifierAstNode(node)) {
    return execGrammarRuleIdentifier(
      node,
      rules,
      buffer,
      index,
    );
  } else {
    throw new Error(`Unknown node: ${(node as IGrammarExpressionAstNode).__type__}`);
  }
}
