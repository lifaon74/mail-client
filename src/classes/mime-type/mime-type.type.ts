import { IToStringTrait } from '@lifaon/traits';
import { IMimeTypeGetParametersTrait } from './traits/get-parameters/mime-type.get-parameters.trait';
import { IMimeTypeGetSubTypeTrait } from './traits/get-sub-type/mime-type.get-sub-type.trait';
import { IMimeTypeGetTypeAndSubTypeTrait } from './traits/get-type-and-sub-type/mime-type.get-type-and-sub-type.trait';
import { IMimeTypeGetTypeTrait } from './traits/get-type/mime-type.get-type.trait';
import { IMimeTypeSetSubTypeTrait } from './traits/set-sub-type/mime-type.set-sub-type.trait';
import { IMimeTypeSetTypeTrait } from './traits/set-type/mime-type.set-type.trait';

export interface IMimeType extends //
  IMimeTypeGetTypeTrait,
  IMimeTypeSetTypeTrait,
  IMimeTypeGetSubTypeTrait,
  IMimeTypeSetSubTypeTrait,
  IMimeTypeGetTypeAndSubTypeTrait,
  IMimeTypeGetParametersTrait,
  IToStringTrait
  //
{
}
