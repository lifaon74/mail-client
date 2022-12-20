import { createEmailHeader } from '../../create-email-header';
import { IEmailHeaderMimeVersion } from './email-header-mime-version.type';

export function createEmailHeaderMimeVersion(
  version: number,
): IEmailHeaderMimeVersion {
  return createEmailHeader({
    key: 'MIME-Version',
    value: version.toFixed(1),
  });
}



