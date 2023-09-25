import {
  IGrammarByteComparisonNotAstNode, isGrammarByteComparisonNotAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/not/grammar-byte-comparison-not-ast-node.type';
import {
  IGrammarByteComparisonExpressionAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/grammar-byte-comparison-expression-ast-node.type';
import {
  isGrammarByteComparisonNotEqualsAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/not-equals/grammar-byte-comparison-not-equals-ast-node.type';
import { GrammarByteComparisonEquals } from '../../../grammar-byte-sequence-comparison/comparisons/equals/grammar-byte-comparison-equals';
import {
  isGrammarByteComparisonEqualsAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/equals/grammar-byte-comparison-equals-ast-node.type';
import {
  GrammarByteComparisonNotEquals,
} from '../../../grammar-byte-sequence-comparison/comparisons/not-equals/grammar-byte-comparison-not-equals';
import {
  isGrammarByteComparisonGreaterThanAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/greater-than/grammar-byte-comparison-greater-than-ast-node.type';
import {
  GrammarByteComparisonLowerThanOrEquals,
} from '../../../grammar-byte-sequence-comparison/comparisons/lower-than-or-equals/grammar-byte-comparison-lower-than-or-equals';
import {
  isGrammarByteComparisonGreaterThanOrEqualsAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/greater-than-or-equals/grammar-byte-comparison-greater-than-or-equals-ast-node.type';
import {
  GrammarByteComparisonLowerThan,
} from '../../../grammar-byte-sequence-comparison/comparisons/lower-than/grammar-byte-comparison-lower-than';
import {
  isGrammarByteComparisonLowerThanAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/lower-than/grammar-byte-comparison-lower-than-ast-node.type';
import {
  isGrammarByteComparisonLowerThanOrEqualsAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/lower-than-or-equals/grammar-byte-comparison-lower-than-or-equals-ast-node.type';
import {
  GrammarByteComparisonGreaterThan,
} from '../../../grammar-byte-sequence-comparison/comparisons/greater-than/grammar-byte-comparison-greater-than';
import {
  GrammarByteComparisonGreaterThanOrEquals,
} from '../../../grammar-byte-sequence-comparison/comparisons/greater-than-or-equals/grammar-byte-comparison-greater-than-or-equals';
import {
  isGrammarByteComparisonAndAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/and/grammar-byte-comparison-and-ast-node.type';
import { optimizeGrammarByteComparisonOr } from './optimize-grammar-byte-comparison-or';
import { optimizeGrammarByteComparisonAnd } from './optimize-grammar-byte-comparison-and';
import { IGenericAstNode } from '../../../../../../../ast/__shared__/generic-ast-node.type';
import {
  isGrammarByteComparisonOrAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/or/grammar-byte-comparison-or-ast-node.type';
import { GrammarByteComparisonNot } from '../../../grammar-byte-sequence-comparison/comparisons/not/grammar-byte-comparison-not';

export function optimizeGrammarByteComparisonNot(
  node: IGrammarByteComparisonNotAstNode,
): IGrammarByteComparisonExpressionAstNode {
  const expression: IGrammarByteComparisonExpressionAstNode = node.expression;

  if (isGrammarByteComparisonEqualsAstNode(expression)) {
    return GrammarByteComparisonNotEquals(expression.value);
  } else if (isGrammarByteComparisonNotEqualsAstNode(expression)) {
    return GrammarByteComparisonEquals(expression.value);
  } else if (isGrammarByteComparisonGreaterThanAstNode(expression)) {
    return GrammarByteComparisonLowerThanOrEquals(expression.value);
  } else if (isGrammarByteComparisonGreaterThanOrEqualsAstNode(expression)) {
    return GrammarByteComparisonLowerThan(expression.value);
  } else if (isGrammarByteComparisonLowerThanAstNode(expression)) {
    return GrammarByteComparisonGreaterThanOrEquals(expression.value);
  } else if (isGrammarByteComparisonLowerThanOrEqualsAstNode(expression)) {
    return GrammarByteComparisonGreaterThan(expression.value);
  } else if (isGrammarByteComparisonAndAstNode(expression)) {
    const optimizedExpression: IGrammarByteComparisonExpressionAstNode = optimizeGrammarByteComparisonAnd(expression);
    return (optimizedExpression === expression)
      ? node
      : GrammarByteComparisonNot(optimizedExpression);
  } else if (isGrammarByteComparisonOrAstNode(expression)) {
    const optimizedExpression: IGrammarByteComparisonExpressionAstNode = optimizeGrammarByteComparisonOr(expression);
    return (optimizedExpression === expression)
      ? node
      : GrammarByteComparisonNot(optimizedExpression);
  } else if (isGrammarByteComparisonNotAstNode(expression)) {
    return expression.expression;
  } else {
    throw new Error(`Unknown node: ${(node as IGenericAstNode).__type__}`);
  }
}
