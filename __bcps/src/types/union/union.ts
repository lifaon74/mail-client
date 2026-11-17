export interface IUnionItem<GType extends string, GValue> {
  readonly type: GType;
  readonly value: GValue;
}

export function createUnionItem<GType extends string, GValue>(
  type: GType,
  value: GValue,
): IUnionItem<GType, GValue> {
  return {
    type,
    value,
  };
}

export function matchUnion<GUnion extends IUnionItem<string, any>, GType extends GUnion['type']>(
  union: GUnion,
  type: GType,
): union is Extract<GUnion, IUnionItem<GType, any>> {
  return union.type === type;
}

// type INumberORStringUnion =
//   | IUnionItem<'number', number>
//   | IUnionItem<'string', string>
//   ;
//
// const numberItem = createUnionItem('number', 6) as INumberORStringUnion;
// if (matchUnion(numberItem, 'number')) {
//   console.log(numberItem.value);
// }
