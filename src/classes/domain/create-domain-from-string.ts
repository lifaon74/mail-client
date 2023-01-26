import { createDomain } from './create-domain';
import { IDomain } from './domain.type';

export function createDomainFromString(
  input: string,
): IDomain {
  try {
    const url: URL = new URL(`https://${input}`);
    if (input === url.hostname) {
      return createDomain(input);
    } else {
      throw null;
    }
  } catch {
    throw new Error(`Invalid domain`);
  }
}
