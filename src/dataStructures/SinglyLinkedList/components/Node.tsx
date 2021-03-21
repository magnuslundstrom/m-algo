import React from 'react';
import { colors } from '../../../colors';
import { Node } from '../classes/Node';
import './SinglyLinkedListAnimations.css';

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

export default class NodeComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { ...this.props, didUpdate: false };
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.isHead !== this.props.isHead || prevProps.isTail !== this.props.isTail) {
      this.setState({ ...this.props, didUpdate: true }, () => {
        setTimeout(() => {
          this.setState({ didUpdate: false });
        }, 500);
      });
    }
  }

  render() {
    const { isTail, isHead, didUpdate } = this.state;
    return (
      <div style={{ display: 'flex' }}>
        <div>
          <div style={divStyles}>
            <p style={pStyles}>{this.state.value}</p>
          </div>
          <p style={{ textAlign: 'center' }}>{isHead ? 'Head' : isTail ? 'Tail' : ''}</p>
        </div>
        {!isTail && (
          <p style={{ marginLeft: '25px', marginRight: '25px' }} className={didUpdate ? 'arrow-did-update' : ''}>
            <i className='fas fa-long-arrow-alt-right'></i>
          </p>
        )}
      </div>
    );
  }
}
const divStyles = {
  backgroundColor: colors.c300,
  borderRadius: '50%',
  height: '50px',
  width: '50px',
  display: 'grid',
  placeItems: 'center',
};

const pStyles = {
  color: colors.c100,
};
