import React from 'react';
import { StyledOperationButton } from '../buttons/StyledOperateButton';
import { StyledOperationInput } from '../inputs/StyledOperateInput';
import { ZippedProps } from './Operations';

export const InsertOperations: React.FC<ZippedProps> = ({ changeIndex, changeValue, curriedOperate, state }) => {
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
