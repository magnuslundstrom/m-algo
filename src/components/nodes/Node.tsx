import React from 'react';
import { Node } from '../../classes/SinglyLinkedList/Node';
import { StyledNode } from './StyledNode';
interface State {
  value: Node['value'];
  isHead: boolean;
  isTail: boolean;
  didUpdate: boolean;
}

interface Props {
  value: Node['value'];
  isHead: boolean;
  isTail: boolean;
}

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};
const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default class NodeComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { ...this.props, didUpdate: false };
  }

  render() {
    const { isTail, isHead, didUpdate } = this.state;
    return (
      <StyledNode>
        <div>
          <div className='value-wrapper'>
            <p>{this.state.value}</p>
          </div>
          <p className='position'>{isHead ? 'Head' : isTail ? 'Tail' : ''}</p>
        </div>
        {!isTail && (
          <p className='arrow-wrapper'>
            <i className='fas fa-long-arrow-alt-right'></i>
          </p>
        )}
      </StyledNode>
    );
  }
}
