import React from 'react';
import { StyledOperationButton } from '../buttons/StyledOperateButton';
import { StyledOperationInput } from '../inputs/StyledOperateInput';
import { ZippedProps } from './Operations';

export const SearchOperations: React.FC<ZippedProps> = ({ changeIndex, changeValue, curriedOperate, state }) => {
  return (
    <div>
      <StyledOperationInput placeholder='Index' value={state.index} onChange={changeIndex} />
      <StyledOperationButton onClick={() => curriedOperate('get')}>Get index</StyledOperationButton>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <StyledOperationInput placeholder='Index -> new Value' value={state.value} onChange={changeValue} />
        <StyledOperationButton noMarg={true} onClick={() => curriedOperate('set')}>
          Set
        </StyledOperationButton>
      </div>
      <StyledOperationButton onClick={() => curriedOperate('reverse')}>Reverse</StyledOperationButton>
    </div>
  );
};
