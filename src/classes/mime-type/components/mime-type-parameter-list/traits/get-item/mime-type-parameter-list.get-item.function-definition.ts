import { IMimeTypeParameter } from '../../components/mime-type-parameter/mime-type-parameter.type';

export interface IMimeTypeParameterListGetItemFunction {
  (
    key: string,
  ): IMimeTypeParameter | undefined;
}
