import { IToStringFunction } from '@lifaon/traits';

export interface IMessageIdListToStringFunctionOptions {
  withFoldingWhiteSpace?: boolean;
}

export interface IMessageIdListToStringFunction {
  (
    options?: IMessageIdListToStringFunctionOptions,
  ): ReturnType<IToStringFunction>;
}
