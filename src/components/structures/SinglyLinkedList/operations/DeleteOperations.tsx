import React from 'react';
import { SinglyLinkedList } from '../../../../models/SinglyLinkedList/singly';
import { StyledOperationButton } from '../../../pure/buttons/StyledOperateButton';
import { StyledOperationInput } from '../../../pure/inputs/StyledOperateInput';
import { ZippedProps } from '../../../core/Operations';

export const DeleteOperations: React.FC<ZippedProps<SinglyLinkedList>> = ({ changeIndex, curriedOperate, state }) => {
  return (
    <div>
      <StyledOperationButton onClick={() => curriedOperate('shift')}>Head</StyledOperationButton>
      <StyledOperationButton onClick={() => curriedOperate('pop')}>Tail</StyledOperationButton>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <StyledOperationInput placeholder='Index' value={state.index} onChange={changeIndex} />
        <StyledOperationButton noMarg={true} onClick={() => curriedOperate('remove')}>
          Delete
        </StyledOperationButton>
      </div>
    </div>
  );
};
