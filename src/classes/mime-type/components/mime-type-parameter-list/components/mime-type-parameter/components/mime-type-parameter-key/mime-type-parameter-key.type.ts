import { IToStringTrait } from '@lifaon/traits';
import { IMimeTypeParameterKeyGetTrait } from './traits/get/mime-type-parameter-key.get.trait';
import { IMimeTypeParameterKeyNewTrait } from './traits/new/mime-type-parameter-key.new.trait';
import { IMimeTypeParameterKeySetTrait } from './traits/set/mime-type-parameter-key.set.trait';

export interface IMimeTypeParameterKey extends //
  IMimeTypeParameterKeyNewTrait<IMimeTypeParameterKey>,
  IMimeTypeParameterKeyGetTrait,
  IMimeTypeParameterKeySetTrait,
  IToStringTrait
  //
{
}
