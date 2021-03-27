import React, { ChangeEvent } from 'react';
import { callMethodWithCorrectArgs } from '../../helpers/callMethodWithCorrectArgs';
import ComponentListNode from '../nodes/Node';
import { List } from '../../classes/SinglyLinkedList';
import { StyledSinglyLinkedList } from './StyledSinglyLinkedList';
import { Sidebar } from '../sidebar/Sidebar';
import { StyledMenuButton, StyledOperationButton } from '../buttons/StyledOperateButton';
import { TransitionGroup } from 'react-transition-group';
import { StyledOperationInput } from '../inputs/StyledOperateInput';

type ValidInputString = 'indexInput' | 'valueInput';

type Method = (...args: any[]) => any;
type GetMethodKey<T> = { [K in keyof T]: T[K] extends Method ? K : never }[keyof T];

export class Singly extends React.Component {
  state = {
    list: List,
    arr: [] as any[],
    sidebar: {
      selectedOperation: 'insert',
      indexInput: '',
      valueInput: '',
      functionBoxText: '',
    },
  };

  changeInput = (e: ChangeEvent<HTMLInputElement>, input: ValidInputString) => {
    this.setState({ ...this.state, sidebar: { ...this.state.sidebar, [input]: e.target.value.slice(0, 3) } });
  };

  operate = (fnName: GetMethodKey<typeof List>) => {
    const { indexInput: index, valueInput: value } = this.state.sidebar;
    callMethodWithCorrectArgs(this.state.list, fnName, value, index);
    const prevState = { ...this.state };
    prevState.arr = this.state.list.serialize();
    prevState.sidebar.functionBoxText = this.state.list[fnName].toString();
    this.setState({ arr: this.state.list.serialize() });
  };

  renderInsert() {
    const { indexInput, valueInput } = this.state.sidebar;
    return (
      <div>
        <StyledOperationInput placeholder='Value' value={valueInput} onChange={(e) => this.changeInput(e, 'valueInput')} />
        <StyledOperationButton onClick={() => this.operate('unshift')}>Head</StyledOperationButton>
        <StyledOperationButton onClick={() => this.operate('push')}>Tail</StyledOperationButton>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StyledOperationInput placeholder='Index' value={indexInput} onChange={(e) => this.changeInput(e, 'indexInput')} />
          <StyledOperationButton noMarg={true} onClick={() => this.operate('insert')}>
            Insert
          </StyledOperationButton>
        </div>
      </div>
    );
  }

  renderMenu() {
    let { selectedOperation } = this.state.sidebar;
    const setDisplay = (operation: string) => {
      selectedOperation = selectedOperation === operation ? '' : operation;
      const prevState = { ...this.state };
      prevState.sidebar.selectedOperation = selectedOperation;
      this.setState(prevState);
    };

    return (
      <div>
        <StyledMenuButton onClick={() => setDisplay('insert')} highlight={selectedOperation === 'insert'}>
          Insert
        </StyledMenuButton>
        <StyledMenuButton onClick={() => setDisplay('search')} highlight={selectedOperation === 'search'}>
          Search
        </StyledMenuButton>
        <StyledMenuButton onClick={() => setDisplay('delete')} highlight={selectedOperation === 'delete'}>
          Delete
        </StyledMenuButton>
        <div>{selectedOperation === 'insert' && this.renderInsert()}</div>
      </div>
    );
  }

  render() {
    const { functionBoxText } = this.state.sidebar;
    return (
      <StyledSinglyLinkedList>
        <Sidebar functionBody={functionBoxText}>
          <h2>Operations</h2>
          {this.renderMenu()}
        </Sidebar>
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
