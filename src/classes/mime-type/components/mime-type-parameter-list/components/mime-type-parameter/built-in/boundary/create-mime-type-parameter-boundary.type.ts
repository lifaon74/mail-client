import { createMimeTypeParameterValueFromString } from '../../components/mime-type-parameter-value/create-mime-type-parameter-value';
import { createMimeTypeParameter } from '../../create-mime-type-parameter';
import { IMimeTypeParameter } from '../../mime-type-parameter.type';
import { MIME_TYPE_PARAMETER_BOUNDARY_KEY } from './mime-type-parameter-boundary-key.contant';
import { IMimeTypeParameterBoundary } from './mime-type-parameter-boundary.type';

export function createMimeTypeParameterBoundary(
  _boundary: string,
): IMimeTypeParameterBoundary {
  const parent: IMimeTypeParameter = createMimeTypeParameter({
    key: MIME_TYPE_PARAMETER_BOUNDARY_KEY,
    value: createMimeTypeParameterValueFromString(_boundary),
  });

  const getBoundary = (): string => {
    return _boundary;
  };

  return {
    ...parent,
    getBoundary,
  };
}


