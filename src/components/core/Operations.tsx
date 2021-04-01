import React, { useState, ChangeEvent } from 'react';
import { isNumber } from '../../helpers/functions';
import { GetLastParam, GetParams } from '../../helpers/types';
import { OperateFunction } from '../core/StructureComponent';

interface Props<T> {
  render: (zippedProps: ZippedProps<T>) => React.ReactElement<ZippedProps<T>>;
  operate: OperateFunction<T>;
}

export const Operations = <T,>({ render, operate }: Props<T>) => {
  const [state, setState] = useState({ value: '', index: '' });

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => setState({ ...state, value: e.target.value.slice(0, 3) });
  const changeIndex = (e: ChangeEvent<HTMLInputElement>) => setState({ ...state, index: e.target.value });

  const curriedOperate = (() => {
    const index = isNumber(state.index) ? parseInt(state.index) : 0;
    return operate.bind(null, index, state.value);
  })();

  return <div>{render({ changeValue, changeIndex, curriedOperate, state })}</div>;
};

type CurriedOperate<T> = (...args: CurriedOperateFunctionParam<T>) => ReturnType<OperateFunction<T>>;

export interface ZippedProps<T> {
  changeValue: ChangeFunc;
  changeIndex: ChangeFunc;
  curriedOperate: CurriedOperate<T>;
  state: {
    index: string | number;
    value: string | number;
  };
}

type ChangeFunc = (e: ChangeEvent<HTMLInputElement>) => void;
type GetLastTwoParams<T extends any[]> = T extends [...args: any, secondLastArg: infer A, lastArg: infer B]
  ? [A, B]
  : T extends [...args: any, secondLastArg: infer A]
  ? [A, undefined]
  : [];
type CurriedOperateFunctionParam<T> = GetLastTwoParams<GetParams<OperateFunction<T>>>;
