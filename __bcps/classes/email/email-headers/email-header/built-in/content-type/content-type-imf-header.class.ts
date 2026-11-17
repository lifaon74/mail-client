import { MIMEType } from '../../../../../mime-type/mime-type.class';
import { IMFHeader } from '../../imf-header.class';
import { CONTENT_TYPE_HEADER_NAME } from './content-type-header-name.constant';
import { ISpecializer } from '../../../../../../misc/specialize';

/** CLASS **/

export class ContentTypeIMFHeader extends IMFHeader {
  static readonly specializer: ISpecializer<IMFHeader, ContentTypeIMFHeader> = (
    input: IMFHeader,
  ): ContentTypeIMFHeader | null => {
    if (input instanceof ContentTypeIMFHeader) {
      return input;
    } else if (input.key === CONTENT_TYPE_HEADER_NAME) {
      return new ContentTypeIMFHeader(
        new MIMEType(input.value()),
      );
    } else {
      return null;
    }
  };

  readonly #mimeType: MIMEType;

  constructor(
    mimeType: MIMEType,
  ) {
    super(
      CONTENT_TYPE_HEADER_NAME,
      (): string => {
        return this.#mimeType.toString();
      },
    );

    this.#mimeType = mimeType;
  }

  get mimeType(): MIMEType {
    return this.#mimeType;
  }
}

