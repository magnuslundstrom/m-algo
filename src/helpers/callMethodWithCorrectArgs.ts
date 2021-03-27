import 'reflect-metadata';
import { GetMethodKeys } from '../helpers/types';
// To dynamically call the methods on the data structure class and pass in arguments dynamically aswell.

// TODO: Replace valueInput, indexInput for something more dynamic later

export const callMethodWithCorrectArgs = <T, K extends GetMethodKeys<T>>(
  prototype: T,
  methodName: K,
  valueInput: string,
  indexInput: string
) => {
  const args: string[] = [];
  Reflect.getMetadata('args', prototype, methodName as string).forEach((arg: 'value' | 'index') => {
    args.push(arg === 'value' ? valueInput : indexInput);
  });

  prototype[methodName](...args);
};
