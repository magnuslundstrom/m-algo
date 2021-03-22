import React from 'react';
import ComponentListNode from '../nodes/Node';
import { List } from '../../classes/SinglyLinkedList';
import { StyledSinglyLinkedList } from './StyledSinglyLinkedList';
import { Sidebar } from '../sidebar/Sidebar';
import { StyledOperateButton } from '../buttons/StyledOperateButton';
import { TransitionGroup } from 'react-transition-group';

export class Singly extends React.Component {
  state = {
    list: List,
    arr: [...List.serialize()],
    functionBoxText: '',
  };

  push() {
    this.state.list.push(this.state.list.length + 1);
    this.setState({ arr: this.state.list.serialize(), functionBoxText: this.state.list.push.toString() });
  }

  pop() {
    this.state.list.pop();
    const newArr = [...this.state.list.serialize()];
    this.setState({ arr: newArr, functionBoxText: this.state.list.pop.toString() }, () => {
      console.log(this.state.arr);
    });
  }

  renderOperations() {
    return (
      <div>
        <StyledOperateButton onClick={() => this.push()}>Push</StyledOperateButton>
        <StyledOperateButton onClick={() => this.pop()}>Pop</StyledOperateButton>
      </div>
    );
  }

  render() {
    const { functionBoxText } = this.state;
    return (
      <StyledSinglyLinkedList>
        <Sidebar functionBody={functionBoxText}>
          <h2>Operations</h2>
          {this.renderOperations()}
        </Sidebar>
        <TransitionGroup style={{ display: 'flex' }}>
          {this.state.arr.map((node, idx) => (
            <ComponentListNode
              value={node.value}
              isTail={idx === this.state.list.length - 1}
              isHead={idx === 0}
              key={`${node.value}`}
            />
          ))}
        </TransitionGroup>
      </StyledSinglyLinkedList>
    );
  }
}
export default Singly;
