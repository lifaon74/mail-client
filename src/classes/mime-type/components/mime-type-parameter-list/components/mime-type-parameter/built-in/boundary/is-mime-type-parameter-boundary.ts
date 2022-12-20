import { IMimeTypeParameter } from '../../mime-type-parameter.type';
import { IMimeTypeParameterBoundary } from './mime-type-parameter-boundary.type';

export function isMimeTypeParameterBoundary(
  value: IMimeTypeParameter,
): value is IMimeTypeParameterBoundary {
  return 'getBoundary' in value;
}
