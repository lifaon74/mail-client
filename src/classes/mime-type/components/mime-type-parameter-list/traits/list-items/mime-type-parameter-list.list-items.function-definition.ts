import { IIteratorTraitCollection } from '@lifaon/traits';
import { IMimeTypeParameter } from '../../components/mime-type-parameter/mime-type-parameter.type';

export interface IMimeTypeParameterListListItemsFunction {
  (): IIteratorTraitCollection<void, IMimeTypeParameter, void>;
}
