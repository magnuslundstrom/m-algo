import React from 'react';
import { callMethodWithCorrectArgs } from '../../helpers/functions';
import { GetMethodKeys } from '../../helpers/types';
import { N as Node } from '../../models/SinglyLinkedList/Node';
interface BaseModel<N extends Node> {
  serialize: () => N[];
  [key: string]: any;
}

export interface BaseState<T extends BaseModel<N>, N extends Node> {
  model: T;
  list: N[];
  functionBody: string;
  currentOperationType?: OperationTypes;
}

export type OperationTypes = 'insert' | 'search' | 'delete';

type StrNum = string | number;
export type OperateFunction<T> = (index: StrNum, value: StrNum, methodName: GetMethodKeys<T>, type?: OperationTypes) => void;

export abstract class StructureComponent<T extends BaseModel<N>, N extends Node> extends React.Component<{}, BaseState<T, N>> {
  abstract state: BaseState<T, N>;

  operate: OperateFunction<T> = (index, value, methodName, type) => {
    callMethodWithCorrectArgs(this.state.model, methodName, value, index);
    const prevState = { ...this.state };
    if (type === 'search' && prevState.list[index as number]) {
      prevState.list[index as number].value = value;
    } else {
      prevState.list = this.state.model.serialize();
    }
    const functionBody = this.state.model[methodName].toString();
    this.setState({ list: prevState.list, functionBody, currentOperationType: type });
  };
}
