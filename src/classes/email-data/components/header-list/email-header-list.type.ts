import { IMapTraitCollection, IToStringTrait } from '@lifaon/traits';
import { IEmailHeaderListAddItemTrait } from './traits/add-item/email-header-list.add-item.trait';
import { IEmailHeaderListGetItemTrait } from './traits/get-item/email-header-list.get-item.trait';
import { IEmailHeaderListListItemsTrait } from './traits/list-items/email-header-list.list-items.trait';

export interface IEmailHeaderList extends //
  IMapTraitCollection<string, string>,
  IEmailHeaderListGetItemTrait,
  IEmailHeaderListAddItemTrait,
  IEmailHeaderListListItemsTrait,
  IToStringTrait
  //
{
}
