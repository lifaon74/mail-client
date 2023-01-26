import { createEmailHeaderMimeVersion } from './create-email-header-mime-version';
import { IEmailHeaderMimeVersion } from './email-header-mime-version.type';

export function createEmailHeaderMimeVersionFromValueString(
  input: string,
): IEmailHeaderMimeVersion {
  const version: number = Number(input);
  if (Number.isNaN(version)) {
    throw new Error(`Invalid MimeVersion`);
  } else {
    return createEmailHeaderMimeVersion(
      version,
    );
  }
}
