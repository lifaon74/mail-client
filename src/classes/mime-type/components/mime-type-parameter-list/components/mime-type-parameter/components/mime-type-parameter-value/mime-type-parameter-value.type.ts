import { IToStringTrait } from '@lifaon/traits';
import { IMimeTypeParameterValueGetEscapedTrait } from './traits/get-escaped/mime-type-parameter-value.get-escaped.trait';
import { IMimeTypeParameterValueGetQuotedTrait } from './traits/get-quoted/mime-type-parameter-value.get-quoted.trait';
import { IMimeTypeParameterValueGetTrait } from './traits/get/mime-type-parameter-value.get.trait';
import { IMimeTypeParameterValueRequiresQuotingTrait } from './traits/requires-quoting/mime-type-parameter-value.requires-quoting.trait';
import { IMimeTypeParameterValueSetTrait } from './traits/set/mime-type-parameter-value.set.trait';

export interface IMimeTypeParameterValue extends //
  IMimeTypeParameterValueGetTrait,
  IMimeTypeParameterValueSetTrait,
  IMimeTypeParameterValueRequiresQuotingTrait,
  IMimeTypeParameterValueGetEscapedTrait,
  IMimeTypeParameterValueGetQuotedTrait,
  IToStringTrait
  //
{
}
