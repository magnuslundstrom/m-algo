import React from 'react';
import { StyledOperationButton } from '../buttons/StyledOperateButton';
import { StyledOperationInput } from '../inputs/StyledOperateInput';
import { ZippedProps } from './Operations';

export const DeleteOperations: React.FC<ZippedProps> = ({ changeIndex, curriedOperate, state }) => {
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
