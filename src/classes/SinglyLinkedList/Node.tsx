import { throws } from 'node:assert';
import React from 'react';
import { colors } from '../../colors';
export class ListNode {
  next: ListNode | null = null;
  constructor(public value: string | number) {}
}

export enum Position {
  Head = 0,
  Body = 1,
  Tail = 2,
}

interface State {
  value: ListNode['value'];
  isHead: boolean;
  isTail: boolean;
  didUpdate: boolean;
}

interface Props {
  value: ListNode['value'];
  isHead: boolean;
  isTail: boolean;
}

export class ComponentListNode extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { ...this.props, didUpdate: false };
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.isHead !== this.props.isHead || prevProps.isTail !== this.props.isTail) {
      this.setState({ ...this.props, didUpdate: true });
    }
  }

  render() {
    const { isTail, isHead } = this.state;
    return (
      <div style={{ display: 'flex' }}>
        <div>
          <div style={divStyles}>
            <p style={pStyles}>{this.state.value}</p>
          </div>
          <p style={{ textAlign: 'center' }}>{isHead ? 'Head' : isTail ? 'Tail' : ''}</p>
        </div>
        {!isTail && (
          <p style={{ marginLeft: '25px', marginRight: '25px' }}>
            <i className='fas fa-long-arrow-alt-right'></i>
          </p>
        )}
      </div>
    );
  }
}
const divStyles = {
  backgroundColor: colors.darkBlue,
  borderRadius: '50%',
  height: '50px',
  width: '50px',
  display: 'grid',
  placeItems: 'center',
};
const pStyles = {
  color: colors.sand,
};
