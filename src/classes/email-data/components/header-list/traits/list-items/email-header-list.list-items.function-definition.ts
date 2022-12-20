import { IIteratorTraitCollection } from '@lifaon/traits';
import { IEmailHeader } from '../../components/header/email-header.type';

export interface IEmailHeaderListListItemsFunction {
  (): IIteratorTraitCollection<void, IEmailHeader, void>;
}
