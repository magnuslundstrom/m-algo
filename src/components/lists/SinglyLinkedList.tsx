import React, { ReactNode } from 'react';
import ComponentListNode from '../nodes/Node';
import { List, ListPrototype } from '../../classes/SinglyLinkedList';
import { StyledSinglyLinkedList } from './StyledSinglyLinkedList';
import { Sidebar } from '../sidebar/Sidebar';
import { StyledOperateButton } from '../buttons/StyledOperateButton';

export class Singly extends React.Component {
  state = {
    list: List,
    functionBoxTextToDisplay: '',
  };

  renderList() {
    const nodes: ReactNode[] = [];
    this.state.list.traverse((node, index) => {
      const isHead = index === 0 ? true : false;
      const isTail = !node.next ? true : false;
      nodes.push(<ComponentListNode value={node.value} isHead={isHead} isTail={isTail} key={index} />);
    });
    return nodes;
  }

  renderOperations() {
    const methods = Object.keys(Object.getPrototypeOf(this.state.list)) as ListPrototype[];
    return methods.map((method) => {
      return <StyledOperateButton onClick={() => this.operate(method)}>{method}</StyledOperateButton>;
    });
  }

  operate(functionName: ListPrototype) {
    let functionCalled: string = '';
    switch (functionName) {
      case 'push':
        this.state.list[functionName](this.state.list.length + 1);
        functionCalled = this.state.list[functionName].toString();
        break;
      case 'pop':
        functionCalled = this.state.list[functionName].toString();
    }
    this.setState({ list: this.state.list, functionBoxTextToDisplay: functionCalled }, () => {});
  }

  render() {
    const { functionBoxTextToDisplay } = this.state;
    return (
      <StyledSinglyLinkedList>
        <Sidebar functionBody={functionBoxTextToDisplay}>
          <h2>Operations</h2>
          {this.renderOperations()}
        </Sidebar>
        <div className='list-wrapper'>{this.state.list.length === 0 ? 'No items in the list' : this.renderList()}</div>
      </StyledSinglyLinkedList>
    );
  }
}
export default Singly;
