import { IMapTraitCollection, IToStringTrait } from '@lifaon/traits';
import { IMimeTypeParameterListAddItemTrait } from './traits/add-item/mime-type-parameter-list.add-item.trait';
import { IMimeTypeParameterListGetItemTrait } from './traits/get-item/mime-type-parameter-list.get-item.trait';
import { IMimeTypeParameterListListItemsTrait } from './traits/list-items/mime-type-parameter-list.list-items.trait';

export interface IMimeTypeParameterList extends //
  IMapTraitCollection<string, string>,
  IMimeTypeParameterListGetItemTrait,
  IMimeTypeParameterListAddItemTrait,
  IMimeTypeParameterListListItemsTrait,
  IToStringTrait
  //
{
}
