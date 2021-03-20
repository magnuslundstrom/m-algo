import React, { FunctionComponent, useState, useEffect, ReactNode } from 'react';
import { ListNode } from '../classes/SinglyLinkedList/Node';
import { SinglyLinkedList } from '../classes/SinglyLinkedList/SinglyLinkedList';

const x = new SinglyLinkedList();
x.push('2');
x.push('3');

class Singly extends React.Component {
  state = {
    list: x,
  };

  renderList() {
    const nodes: ReactNode[] = [];
    this.state.list.traverse((node, index) => nodes.push(<p>{node.renderSelf(index)}</p>));
    return nodes;
  }

  render() {
    return <div style={{ display: 'flex' }}>{this.renderList()}</div>;
  }
}
export default Singly;
