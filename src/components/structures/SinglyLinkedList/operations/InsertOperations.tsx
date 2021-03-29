import React from 'react';
import { SinglyLinkedList } from '../../../../models/SinglyLinkedList/singly';
import { StyledOperationButton } from '../../../pure/buttons/StyledOperateButton';
import { StyledOperationInput } from '../../../pure/inputs/StyledOperateInput';
import { ZippedProps } from '../../../core/Operations';

export const InsertOperations: React.FC<ZippedProps<SinglyLinkedList>> = ({
  changeIndex,
  changeValue,
  curriedOperate,
  state,
}) => {
  return (
    <div>
      <StyledOperationInput placeholder='Value' value={state.value} onChange={changeValue} />
      <StyledOperationButton onClick={() => curriedOperate('unshift')}>Head</StyledOperationButton>
      <StyledOperationButton onClick={() => curriedOperate('push')}>Tail</StyledOperationButton>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <StyledOperationInput placeholder='Index' value={state.index} onChange={changeIndex} />
        <StyledOperationButton noMarg={true} onClick={() => curriedOperate('insert')}>
          Insert
        </StyledOperationButton>
      </div>
    </div>
  );
};
