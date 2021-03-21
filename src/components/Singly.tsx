import React, { ReactNode } from 'react';
import { ComponentListNode } from '../classes/SinglyLinkedList/Node';
import { SinglyLinkedList } from '../classes/SinglyLinkedList/SinglyLinkedList';
import { colors } from '../colors';

// Initial setup
const defaultList = new SinglyLinkedList();
defaultList.push('1');
defaultList.push('2');
defaultList.push('3');

class Singly extends React.Component {
  state = {
    list: defaultList,
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
    switch (functionName) {
      case 'push':
        this.state.list[functionName](this.state.list.length + 1);
        break;
    }
    this.setState({ list: this.state.list });
  }

  render() {
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
      </div>
    );
  }
}
export default Singly;
