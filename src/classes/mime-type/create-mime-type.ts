import { HTTP_TOKEN_PATTERN } from '../../constants/http-token-pattern.constant';
import {
  createMimeTypeParameterList,
  createMimeTypeParameterListFromString,
} from './components/mime-type-parameter-list/create-mime-type-parameter-list';
import { IMimeTypeParameterList } from './components/mime-type-parameter-list/mime-type-parameter-list.type';
import { IMimeType } from './mime-type.type';

const TYPE_PATTERN = `${HTTP_TOKEN_PATTERN}+`;
const TYPE_REGEXP = new RegExp(`^${TYPE_PATTERN}$`);

const SUBTYPE_PATTERN = `${HTTP_TOKEN_PATTERN}+`;
const SUBTYPE_REGEXP = new RegExp(`^${TYPE_PATTERN}$`);

const TYPE_AND_SUBTYPE_REGEXP: RegExp = new RegExp(`^(${TYPE_PATTERN})/(${SUBTYPE_PATTERN})$`, 'g');

/*
https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 */

export interface ICreateMimeTypeOptions {
  type: string; // expected valid
  subtype: string; // expected valid
  parameters?: IMimeTypeParameterList;
}

export function createMimeType(
  {
    type: _type,
    subtype: _subtype,
    parameters: _parameters = createMimeTypeParameterList(),
  }: ICreateMimeTypeOptions,
): IMimeType {

  const getType = (): string => {
    return _type;
  };

  const setType = (
    value: string,
  ): void => {
    if (TYPE_REGEXP.test(value)) {
      _type = value;
    } else {
      throw new Error(`Invalid type`);
    }
  };

  const getSubType = (): string => {
    return _subtype;
  };

  const setSubType = (
    value: string,
  ): void => {
    if (SUBTYPE_REGEXP.test(value)) {
      _subtype = value;
    } else {
      throw new Error(`Invalid subtype`);
    }
  };

  const getTypeAndSubType = (): string => {
    return `${_type}/${_subtype}`;
  };

  const getParameters = (): IMimeTypeParameterList => {
    return _parameters;
  };

  const toString = (): string => {
    const parametersString: string = (_parameters.getSize() === 0)
      ? ''
      : `; ${_parameters.toString()}`;
    return `${getTypeAndSubType()}${parametersString}`;
  };

  return {
    getType,
    setType,
    getSubType,
    setSubType,
    getTypeAndSubType,
    getParameters,
    toString,
  };
}

/*-----*/

export function createMimeTypeFromString(
  input: string,
): IMimeType {
  const index: number = input.indexOf(';');
  let typeAndSubtype: string;
  let parameters: string;

  if (index === -1) {
    typeAndSubtype = input;
    parameters = '';
  } else {
    typeAndSubtype = input.slice(0, index);
    parameters = input.slice(index + 1);
  }


  TYPE_AND_SUBTYPE_REGEXP.lastIndex = 0;
  const match: RegExpExecArray | null = TYPE_AND_SUBTYPE_REGEXP.exec(typeAndSubtype);

  if (match === null) {
    throw new Error(`Invalid type or subtype`);
  } else {
    return createMimeType({
      type: match[1],
      subtype: match[2],
      parameters: (parameters === '')
        ? createMimeTypeParameterList()
        : createMimeTypeParameterListFromString(parameters),
    });
  }
}


export interface ICreateSafeMimeTypeOptions extends ICreateMimeTypeOptions {
}

export function createSafeMimeType(
  {
    type,
    subtype,
    parameters,
  }: ICreateSafeMimeTypeOptions,
): IMimeType {
  const mimeType: IMimeType = createMimeType({
    type: '',
    subtype: '',
    parameters,
  });

  mimeType.setType(type);
  mimeType.setSubType(subtype);

  return mimeType;
}
