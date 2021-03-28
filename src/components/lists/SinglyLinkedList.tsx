import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import { callMethodWithCorrectArgs } from '../../helpers/functions';
import { GetMethodKeys } from '../../helpers/types';
import ComponentListNode from '../nodes/Node';
import { List } from '../../classes/SinglyLinkedList';
import { StyledSinglyLinkedList } from './StyledSinglyLinkedList';
import { Sidebar } from '../sidebar/Sidebar';

export type OperateFunction = (index: string | number, value: string | number, methodName: GetMethodKeys<typeof List>) => void;

interface State {
  list: typeof List;
  arr: Node[];
  functionBody: string;
}

export class Singly extends React.Component {
  state: State = {
    list: List,
    arr: [],
    functionBody: '',
  };

  operate = (index: string | number, value: string | number, methodName: GetMethodKeys<typeof List>) => {
    callMethodWithCorrectArgs(this.state.list, methodName, value, index);
    const prevState = { ...this.state };
    prevState.arr = this.state.list.serialize();
    const functionBody = this.state.list[methodName].toString();
    this.setState({ arr: this.state.list.serialize(), functionBody });
  };

  render() {
    return (
      <StyledSinglyLinkedList>
        <Sidebar operate={this.operate} functionBody={this.state.functionBody} />
        <div>
          <h1>Singly Linked List</h1>
          <TransitionGroup style={{ display: 'flex', flexWrap: 'wrap' }}>
            {this.state.list.serialize().map((node, idx) => (
              <ComponentListNode
                value={node.value}
                isTail={idx === this.state.list.length - 1}
                isHead={idx === 0}
                key={node.key}
              />
            ))}
          </TransitionGroup>
        </div>
      </StyledSinglyLinkedList>
    );
  }
}
export default Singly;
