import { IMimeTypeParameterValue } from '../../components/mime-type-parameter-value/mime-type-parameter-value.type';

export interface IMimeTypeParameterGetValueFunction {
  (): IMimeTypeParameterValue | null;
}
