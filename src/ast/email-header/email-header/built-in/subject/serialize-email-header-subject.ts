import { IEmailHeaderSubjectAstNode, EmailHeaderSubjectAstNodeKey } from './email-header-subject-ast-node.type';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';
import {
  applyEmailDataLineLimits,
  IApplyEmailDataLineLimitsOptions,
  EMAIL_DATA_MAX_LINE_LENGTH_INCLUDING_CRLF,
} from '../../../../../classes/email-data/misc/line-length-limits';

/** FUNCTION **/

const APPLY_EMAIL_DATA_LINE_LIMITS_OPTIONS: IApplyEmailDataLineLimitsOptions = {
  firstLineMaxLength: EMAIL_DATA_MAX_LINE_LENGTH_INCLUDING_CRLF - (EmailHeaderSubjectAstNodeKey.length + 2), // "Subject: "
  maxLineLength: EMAIL_DATA_MAX_LINE_LENGTH_INCLUDING_CRLF,
};

/** FUNCTION **/

export function serializeEmailHeaderSubject(
  {
    value,
  }: IEmailHeaderSubjectAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    EmailHeaderSubjectAstNodeKey,
    applyEmailDataLineLimits(value, APPLY_EMAIL_DATA_LINE_LIMITS_OPTIONS),
  );
}
