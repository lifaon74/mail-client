import { IToStringFunction } from '@lifaon/traits';

export interface IEmailContactListToStringFunctionOptions {
  withFoldingWhiteSpace?: boolean;
}

export interface IEmailContactListToStringFunction {
  (
    options?: IEmailContactListToStringFunctionOptions,
  ): ReturnType<IToStringFunction>;
}
