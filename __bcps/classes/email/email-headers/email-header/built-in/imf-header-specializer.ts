import { memoizeSpecializer, sequentialSpecializers } from '../../../../../misc/specialize';
import { ContentTypeIMFHeader } from './content-type/content-type-imf-header.class';

export const imfHeaderSpecializer = memoizeSpecializer(
  sequentialSpecializers([
    ContentTypeIMFHeader.specializer,
  ]),
);
