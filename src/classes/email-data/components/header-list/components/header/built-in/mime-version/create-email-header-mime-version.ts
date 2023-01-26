import { createEmailHeader } from '../../create-email-header';
import { IEmailHeaderMimeVersion } from './email-header-mime-version.type';
import { HEADER_MIME_VERSION_KEY_NAME } from './header-mime-version-key.contant';

export function createEmailHeaderMimeVersion(
  version: number,
): IEmailHeaderMimeVersion {
  return createEmailHeader({
    key: HEADER_MIME_VERSION_KEY_NAME,
    value: version.toFixed(1),
  });
}



