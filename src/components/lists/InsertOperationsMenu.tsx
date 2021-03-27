import React, { useState, ChangeEvent } from 'react';
import { isNumber } from '../../helpers/functions';
import { StyledOperationButton } from '../buttons/StyledOperateButton';
import { StyledOperationInput } from '../inputs/StyledOperateInput';
import { OperateFunction } from './SinglyLinkedList';

interface Props {
  operate: OperateFunction;
}

export const InsertOperationsMenu: React.FC<Props> = ({ operate }) => {
  const [state, setState] = useState({ value: '4', index: '2' });

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => setState({ ...state, value: e.target.value.slice(0, 3) });
  const changeIndex = (e: ChangeEvent<HTMLInputElement>) => setState({ ...state, index: e.target.value });

  const curriedOperate = (() => {
    const index = isNumber(state.index) ? parseInt(state.index) : 0;
    return operate.bind(null, index, state.value);
  })();

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
