import { IToStringTrait } from '@lifaon/traits';
import { IEmailHeader } from '../../email-header.type';
import { IEmailHeaderSubjectToStringTrait } from './traits/to-string/email-header-subject.to-string.trait';

export interface IEmailHeaderSubject extends Omit<IEmailHeader, keyof IToStringTrait>, //
  IEmailHeaderSubjectToStringTrait
  //
{
}
