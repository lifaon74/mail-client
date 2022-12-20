import { IToStringTrait } from '@lifaon/traits';
import { IDomainGetTrait } from './traits/get/domain.get.trait';

export interface IDomain extends //
  IDomainGetTrait,
  IToStringTrait
  //
{
}
