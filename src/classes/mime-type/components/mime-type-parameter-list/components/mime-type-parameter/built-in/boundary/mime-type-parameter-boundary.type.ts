import { IMimeTypeParameter } from '../../mime-type-parameter.type';
import { IMimeTypeParameterBoundaryGetBoundaryTrait } from './traits/get-boundary/mime-type-parameter-boundary.get-boundary.trait';

export interface IMimeTypeParameterBoundary extends IMimeTypeParameter, //
  IMimeTypeParameterBoundaryGetBoundaryTrait
  //
{
}
