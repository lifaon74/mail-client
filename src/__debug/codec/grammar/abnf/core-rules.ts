import { GrammarRule } from '../ast/grammar-rule/grammar-rule';
import { GrammarByteRange } from '../ast/grammar-byte-sequence-comparison/shortcuts/grammar-byte-range';
import {
  CHAR_A_LOWER_CASE,
  CHAR_Z_LOWER_CASE,
  CHAR_A_UPPER_CASE,
  CHAR_Z_UPPER_CASE,
  CHAR_0, CHAR_9, CHAR_F_LOWER_CASE, CHAR_F_UPPER_CASE, CHAR_DOUBLE_QUOTE, CHAR_SP, CHAR_HT, CHAR_CR, CHAR_LF, CHAR_1,
} from '../../../../constants/chars/chars.constant';
import { GrammarAlternative } from '../ast/grammar-alternative/grammar-alternative';
import { GrammarRuleIdentifier } from '../ast/grammar-rule-identifier/grammar-rule-identifier';
import { GrammarByte } from '../ast/grammar-byte-sequence-comparison/shortcuts/grammar-byte';
import { GrammarRepeatZeroOrMore } from '../ast/grammar-repeat/shortcuts/grammar-repeat-zero-or-more';
import { GrammarConcat } from '../ast/grammar-concat/grammar-concat';
import { GrammarByteComparison } from '../ast/grammar-byte-sequence-comparison/shortcuts/grammar-byte-comparison';
import { or } from '../ast/grammar-byte-sequence-comparison/comparisons/or/grammar-byte-comparison-or.shortcut';
import { range } from '../ast/grammar-byte-sequence-comparison/comparisons/range/grammar-byte-comparison-range.shortcut';
import { eq } from '../ast/grammar-byte-sequence-comparison/comparisons/equals/grammar-byte-comparison-equals.shortcut';

const ALPHA_LOWER_CASE = GrammarRule('ALPHA_LOWER_CASE', GrammarByteRange(CHAR_A_LOWER_CASE, CHAR_Z_LOWER_CASE));
const ALPHA_UPPER_CASE = GrammarRule('ALPHA_UPPER_CASE', GrammarByteRange(CHAR_A_UPPER_CASE, CHAR_Z_UPPER_CASE));
const ALPHA = GrammarRule('ALPHA', GrammarAlternative([
  GrammarRuleIdentifier('ALPHA_LOWER_CASE'),
  GrammarRuleIdentifier('ALPHA_UPPER_CASE'),
]));
const DIGIT = GrammarRule('DIGIT', GrammarByteRange(CHAR_0, CHAR_9));
const HEXDIG = GrammarRule('HEXDIG', GrammarAlternative([
  GrammarRuleIdentifier('DIGIT'),
  GrammarByteRange(CHAR_A_LOWER_CASE, CHAR_F_LOWER_CASE),
  GrammarByteRange(CHAR_A_UPPER_CASE, CHAR_F_UPPER_CASE),
]));
const DQUOTE = GrammarRule('DQUOTE', GrammarByte(CHAR_DOUBLE_QUOTE));
const SP = GrammarRule('SP', GrammarByte(CHAR_SP));
const HTAB = GrammarRule('HTAB', GrammarByte(CHAR_HT));
const WSP = GrammarRule('WSP', GrammarAlternative([
  GrammarRuleIdentifier('SP'),
  GrammarRuleIdentifier('HTAB'),
]));
const LWSP = GrammarRule('LWSP', GrammarRepeatZeroOrMore(
  GrammarAlternative([
    GrammarRuleIdentifier('WSP'),
    GrammarConcat([
      GrammarRuleIdentifier('CRLF'),
      GrammarRuleIdentifier('WSP'),
    ]),
  ]),
));
const VCHAR = GrammarRule('VCHAR', GrammarByteRange(0x21, 0x7e));
const CHAR = GrammarRule('CHAR', GrammarByteRange(0x01, 0x7f));
const OCTET = GrammarRule('OCTET', GrammarByteRange(0x00, 0xff));
const CTL = GrammarRule('CTL', GrammarByteComparison(
  or(
    range(0x00, 0x1f),
    eq(0x7f),
  ),
));
const CR = GrammarRule('CR', GrammarByte(CHAR_CR));
const LF = GrammarRule('LF', GrammarByte(CHAR_LF));
const CRLF = GrammarRule('CRLF', GrammarConcat([
  GrammarRuleIdentifier('CR'),
  GrammarRuleIdentifier('LF'),
]));
const BIT = GrammarRule('BIT', GrammarByteComparison(
  or(
    eq(CHAR_0),
    eq(CHAR_1),
  ),
));

export const ABNF_CORE_RULES = [
  ALPHA_LOWER_CASE,
  ALPHA_UPPER_CASE,
  ALPHA,
  DIGIT,
  HEXDIG,
  DQUOTE,
  SP,
  HTAB,
  WSP,
  LWSP,
  VCHAR,
  CHAR,
  OCTET,
  CTL,
  CR,
  LF,
  CRLF,
  BIT,
];
