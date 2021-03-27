import 'reflect-metadata';
import { List } from '../classes/SinglyLinkedList';
// To dynamically call the methods on the data structure class and pass in arguments dynamically aswell.

// TODO: Replace valueInput, indexInput for something more dynamic later

type Method = (...args: any[]) => any;

type GetMethodKey<T> = { [K in keyof T]: T[K] extends Method ? K : never }[keyof T];

export const callMethodWithCorrectArgs = <T, K extends GetMethodKey<T>>(
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
