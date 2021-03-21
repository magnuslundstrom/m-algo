import React, { ReactNode } from 'react';
import ComponentListNode from './Node';
import { SinglyLinkedList } from '../classes/SinglyLinkedList';
import { colors } from '../../../colors';
import { FunctionTextBox } from '../../../components/FunctionTextBox';

// Initial setup
const defaultList = new SinglyLinkedList();
defaultList.push('1');
defaultList.push('2');
defaultList.push('3');

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

  operate(functionName: keyof typeof SinglyLinkedList.prototype) {
    let functionCalled: string = '';
    switch (functionName) {
      case 'push':
        this.state.list[functionName](this.state.list.length + 1);
        functionCalled = this.state.list[functionName].toString();
        break;
    }
    this.setState({ list: this.state.list, functionBoxTextToDisplay: functionCalled }, () => {});
  }

  render() {
    const { functionBoxTextToDisplay } = this.state;
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', marginTop: '50px' }}>
        <div style={{ backgroundColor: colors.dark, paddingLeft: '25px', marginRight: '50px' }}>
          <h2 style={{ color: colors.sand }}>Operations</h2>
          <button style={{ backgroundColor: colors.lightGreen, color: colors.sand }} onClick={() => this.operate('push')}>
            Push
          </button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {this.state.list.length === 0 ? 'No items in the list' : this.renderList()}
        </div>
        {this.state.functionBoxTextToDisplay && <FunctionTextBox functionBody={functionBoxTextToDisplay} />}
      </div>
    );
  }
}
export default Singly;
