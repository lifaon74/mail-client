import { IMimeTypeParameterValue } from '../../components/mime-type-parameter-value/mime-type-parameter-value.type';

export interface IMimeTypeParameterSetValueFunction {
  (
    value: IMimeTypeParameterValue | null,
  ): void;
}
