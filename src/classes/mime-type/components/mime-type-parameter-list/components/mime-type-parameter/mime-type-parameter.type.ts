import { IToStringTrait } from '@lifaon/traits';
import { IMimeTypeParameterGetKeyTrait } from './traits/get-key/mime-type-parameter.get-key.trait';
import { IMimeTypeParameterGetValueTrait } from './traits/get-value/mime-type-parameter.get-value.trait';
import { IMimeTypeParameterSetValueTrait } from './traits/set-value/mime-type-parameter.set-value.trait';

export interface IMimeTypeParameter extends //
  IMimeTypeParameterGetKeyTrait,
  IMimeTypeParameterGetValueTrait,
  IMimeTypeParameterSetValueTrait,
  IToStringTrait
  //
{
}
