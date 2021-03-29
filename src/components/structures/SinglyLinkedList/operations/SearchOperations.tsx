import React from 'react';
import { StyledOperationButton } from '../../../pure/buttons/StyledOperateButton';
import { StyledOperationInput } from '../../../pure/inputs/StyledOperateInput';
import { ZippedProps } from '../../../core/Operations';
import { SinglyLinkedList } from '../../../../models/SinglyLinkedList/singly';

export const SearchOperations: React.FC<ZippedProps<SinglyLinkedList>> = ({
  changeIndex,
  changeValue,
  curriedOperate,
  state,
}) => {
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
