import {
  unescapeMimeTypeParameterValue,
} from './unescape-mime-type-parameter-value';

export function unquoteMimeTypeParameterValue(
  value: string,
): string {
  return unescapeMimeTypeParameterValue(
    value
      .slice(1, -1),
  );
}
