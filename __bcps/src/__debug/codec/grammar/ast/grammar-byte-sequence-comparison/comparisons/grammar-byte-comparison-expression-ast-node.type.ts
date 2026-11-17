import {
  IGrammarByteComparisonEqualsAstNode,
  isGrammarByteComparisonEqualsAstNode,
} from './equals/grammar-byte-comparison-equals-ast-node.type';
import { IGrammarByteComparisonAndAstNode, isGrammarByteComparisonAndAstNode } from './and/grammar-byte-comparison-and-ast-node.type';
import { IGrammarByteComparisonOrAstNode, isGrammarByteComparisonOrAstNode } from './or/grammar-byte-comparison-or-ast-node.type';
import {
  IGrammarByteComparisonGreaterThanOrEqualsAstNode, isGrammarByteComparisonGreaterThanOrEqualsAstNode,
} from './greater-than-or-equals/grammar-byte-comparison-greater-than-or-equals-ast-node.type';
import {
  IGrammarByteComparisonLowerThanOrEqualsAstNode, isGrammarByteComparisonLowerThanOrEqualsAstNode,
} from './lower-than-or-equals/grammar-byte-comparison-lower-than-or-equals-ast-node.type';
import {
  IGrammarByteComparisonGreaterThanAstNode,
  isGrammarByteComparisonGreaterThanAstNode,
} from './greater-than/grammar-byte-comparison-greater-than-ast-node.type';
import {
  IGrammarByteComparisonLowerThanAstNode,
  isGrammarByteComparisonLowerThanAstNode,
} from './lower-than/grammar-byte-comparison-lower-than-ast-node.type';
import { IGrammarByteComparisonNotAstNode, isGrammarByteComparisonNotAstNode } from './not/grammar-byte-comparison-not-ast-node.type';
import {
  IGrammarByteComparisonNotEqualsAstNode,
  isGrammarByteComparisonNotEqualsAstNode,
} from './not-equals/grammar-byte-comparison-not-equals-ast-node.type';

export type IGrammarByteComparisonExpressionAstNode =
  | IGrammarByteComparisonAndAstNode
  | IGrammarByteComparisonEqualsAstNode
  | IGrammarByteComparisonGreaterThanAstNode
  | IGrammarByteComparisonGreaterThanOrEqualsAstNode
  | IGrammarByteComparisonLowerThanAstNode
  | IGrammarByteComparisonLowerThanOrEqualsAstNode
  | IGrammarByteComparisonNotAstNode
  | IGrammarByteComparisonNotEqualsAstNode
  | IGrammarByteComparisonOrAstNode
  ;

export function isGrammarByteComparisonExpressionAstNode(
  input: object,
): input is IGrammarByteComparisonExpressionAstNode {
  return isGrammarByteComparisonAndAstNode(input)
    || isGrammarByteComparisonEqualsAstNode(input)
    || isGrammarByteComparisonGreaterThanAstNode(input)
    || isGrammarByteComparisonGreaterThanOrEqualsAstNode(input)
    || isGrammarByteComparisonLowerThanAstNode(input)
    || isGrammarByteComparisonLowerThanOrEqualsAstNode(input)
    || isGrammarByteComparisonNotAstNode(input)
    || isGrammarByteComparisonNotEqualsAstNode(input)
    || isGrammarByteComparisonOrAstNode(input)
    ;
}

