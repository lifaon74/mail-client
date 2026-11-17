import { IExecResultByteSequence } from '../grammar-byte-sequence-comparison/exec-result-byte-sequence.type';
import { IExecResultEnd } from '../grammar-end/exec-result-end.type';
import { IExecResultAlternative } from '../grammar-alternative/exec-result-alternative.type';
import { IExecResultConcat } from '../grammar-concat/exec-result-concat.type';
import { IExecResultRepeat } from '../grammar-repeat/exec-result-repeat.type';
import { IExecResultRule } from '../grammar-rule/exec-result-rule.type';

export type IExecResultExpression =
  | IExecResultByteSequence
  | IExecResultEnd
  | IExecResultAlternative
  | IExecResultConcat
  | IExecResultRepeat
  | IExecResultRule
  ;
