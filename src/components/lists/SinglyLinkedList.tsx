import React, { ReactNode } from 'react';
import ComponentListNode from '../nodes/Node';
import { SinglyLinkedList } from '../../classes/SinglyLinkedList/SinglyLinkedList';
import { colors } from '../colors';
import { Sidebar } from '../sidebar/Sidebar';
import { StyledOperateButton } from '../buttons/StyledOperateButton';

// Initial setup
const defaultList = new SinglyLinkedList();
defaultList.push('1');
defaultList.push('2');
defaultList.push('3');

type singlyKeys = keyof typeof SinglyLinkedList.prototype;

export class Singly extends React.Component {
  state = {
    list: defaultList,
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
    const methods = Object.keys(Object.getPrototypeOf(this.state.list)) as singlyKeys[];
    return methods.map((method) => {
      return <StyledOperateButton onClick={() => this.operate(method)}>{method}</StyledOperateButton>;
    });
  }

  operate(functionName: keyof typeof SinglyLinkedList.prototype) {
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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', marginTop: '50px', gridGap: '25px' }}>
        <Sidebar functionBody={functionBoxTextToDisplay}>
          <h2 style={{ color: colors.c100 }}>Operations</h2>
          {this.renderOperations()}
        </Sidebar>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {this.state.list.length === 0 ? 'No items in the list' : this.renderList()}
        </div>
      </div>
    );
  }
}
export default Singly;
