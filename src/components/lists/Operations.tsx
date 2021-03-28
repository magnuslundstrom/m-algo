import React, { useState, ChangeEvent } from 'react';
import { isNumber } from '../../helpers/functions';
import { OperateFunction } from '../lists/SinglyLinkedList';

interface Props {
  render: (zippedProps: ZippedProps) => React.ReactElement<ZippedProps>;
  operate: OperateFunction;
}

export const Operations: React.FC<Props> = ({ render, operate }) => {
  const [state, setState] = useState({ value: '4', index: '2' });

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => setState({ ...state, value: e.target.value.slice(0, 3) });
  const changeIndex = (e: ChangeEvent<HTMLInputElement>) => setState({ ...state, index: e.target.value });

  const curriedOperate = (() => {
    const index = isNumber(state.index) ? parseInt(state.index) : 0;
    return operate.bind(null, index, state.value);
  })();

  return <div>{render({ changeValue, changeIndex, curriedOperate, state })}</div>;
};

export interface ZippedProps {
  changeValue: ChangeFunc;
  changeIndex: ChangeFunc;
  curriedOperate: (operation: CurriedOperateFunctionParam) => ReturnType<OperateFunction>;
  state: {
    index: string | number;
    value: string | number;
  };
}

type ChangeFunc = (e: ChangeEvent<HTMLInputElement>) => void;
type CurriedOperateFunctionParam = GetLastParam<GetParams<OperateFunction>>;

type GetParams<T extends (...args: any[]) => void> = T extends (...args: infer S) => void ? S : never;
type GetLastParam<P extends any[]> = P extends [...any[], infer T] ? T : never;
