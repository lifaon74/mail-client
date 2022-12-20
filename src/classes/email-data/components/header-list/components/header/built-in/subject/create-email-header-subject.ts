import {
  applyEmailDataLineLimits,
  EMAIL_DATA_MAX_LINE_LENGTH_INCLUDING_CRLF,
  IApplyEmailDataLineLimitsOptions,
} from '../../../../../../misc/line-length-limits';
import { createEmailHeader } from '../../create-email-header';
import { IEmailHeader } from '../../email-header.type';
import { IEmailHeaderSubject } from './email-header-subject.type';
import { HEADER_SUBJECT_KEY_NAME } from './header-subject-key.contant';
import { IEmailHeaderSubjectToStringFunctionOptions } from './traits/to-string/email-header-subject.to-string.function-definition';

const APPLY_EMAIL_DATA_LINE_LIMITS_OPTIONS: IApplyEmailDataLineLimitsOptions = {
  firstLineMaxLength: EMAIL_DATA_MAX_LINE_LENGTH_INCLUDING_CRLF - (HEADER_SUBJECT_KEY_NAME.length + 2), // "Subject: "
  maxLineLength: EMAIL_DATA_MAX_LINE_LENGTH_INCLUDING_CRLF,
};

export function createEmailHeaderSubject(
  _subject: string,
): IEmailHeaderSubject {
  const parent: IEmailHeader = createEmailHeader({
    key: HEADER_SUBJECT_KEY_NAME,
    value: _subject,
  });

  const toString = (
    {
      withFoldingWhiteSpace = true,
    }: IEmailHeaderSubjectToStringFunctionOptions = {},
  ): string => {
    const value: string = withFoldingWhiteSpace
      ? applyEmailDataLineLimits(parent.getValue(), APPLY_EMAIL_DATA_LINE_LIMITS_OPTIONS)
      : parent.getValue();
    return `${parent.getKey()}: ${value}`;
  };

  return {
    ...parent,
    toString,
  };
}

