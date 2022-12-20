import { IMimeTypeParameterList } from '../../components/mime-type-parameter-list/mime-type-parameter-list.type';

export interface IMimeTypeGetParametersFunction {
  (): IMimeTypeParameterList;
}
