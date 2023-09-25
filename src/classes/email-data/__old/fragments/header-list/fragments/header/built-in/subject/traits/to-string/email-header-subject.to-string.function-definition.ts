import { IToStringFunction } from '@lifaon/traits';

export interface IEmailHeaderSubjectToStringFunctionOptions {
  withFoldingWhiteSpace?: boolean;
}

export interface IEmailHeaderSubjectToStringFunction {
  (
    options?: IEmailHeaderSubjectToStringFunctionOptions,
  ): ReturnType<IToStringFunction>;
}
