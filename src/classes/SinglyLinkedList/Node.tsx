import React from 'react';
export class ListNode {
  next: ListNode | null = null;
  constructor(public value: string) {}

  renderSelf(pos: number) {
    const divStyles = {
      backgroundColor: pos === 0 ? 'yellow' : 'blue',
    };
    const pStyles = {
      color: 'red',
    };
    return (
      <div style={divStyles}>
        <p style={pStyles}>{this.value}</p>
      </div>
    );
  }
}
