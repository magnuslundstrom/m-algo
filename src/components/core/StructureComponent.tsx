import React from 'react';
import { callMethodWithCorrectArgs } from '../../helpers/functions';
import { GetMethodKeys } from '../../helpers/types';

interface BaseModel<N> {
  serialize: () => N[];
  [key: string]: any;
}

export interface BaseState<T extends BaseModel<N>, N> {
  model: T;
  list: N[];
  functionBody: string;
}

type StrNum = string | number;

export type OperateFunction<T> = (index: StrNum, value: StrNum, methodName: GetMethodKeys<T>) => void;

export abstract class StructureComponent<T extends BaseModel<N>, N> extends React.Component<{}, BaseState<T, N>> {
  abstract state: {
    model: T;
    list: N[];
    functionBody: string;
  };

  operate: OperateFunction<T> = (index, value, methodName) => {
    callMethodWithCorrectArgs(this.state.model, methodName, value, index);
    const prevState = { ...this.state };
    prevState.list = this.state.model.serialize();
    const functionBody = this.state.model[methodName].toString();
    this.setState({ list: this.state.model.serialize(), functionBody });
  };
}
