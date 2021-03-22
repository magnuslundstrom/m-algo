import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Node } from '../../classes/SinglyLinkedList/Node';
import { StyledNode } from './StyledNode';
import './transitions.css';
interface State {
  value: Node['value'];
  isHead: boolean;
  isTail: boolean;
}

interface Props {
  value: Node['value'];
  isHead: boolean;
  isTail: boolean;
}

export default class NodeComponent extends React.Component<Props, State> {
  ref: React.RefObject<HTMLDivElement>;
  constructor(props: Props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    const { isTail, isHead, value } = this.props;
    return (
      <CSSTransition classNames='node' timeout={1000} key={value} in={true} {...this.props} nodeRef={this.ref}>
        <StyledNode ref={this.ref}>
          {!isHead && (
            <p className='arrow-wrapper'>
              <i className='fas fa-long-arrow-alt-right'></i>
            </p>
          )}
          <div>
            <div className='value-wrapper'>
              <p>{value}</p>
            </div>
            <p className='position'>{isHead ? 'Head' : isTail ? 'Tail' : ''}</p>
          </div>
        </StyledNode>
      </CSSTransition>
    );
  }
}
