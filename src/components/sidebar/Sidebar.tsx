import React, { useState } from 'react';
import { FunctionTextBox } from './FunctionTextBox';
import { StyledSidebar } from './StyledSidebar';
import { Operations } from '../lists/Operations';
import { InsertOperations } from '../lists/InsertOperations';
import { SearchOperations } from '../lists/SearchOperations';
import { DeleteOperations } from '../lists/DeleteOperations';
import { SidebarOperations as SidebarOperationsMenu } from '../lists/SidebarOperations';
import { OperateFunction } from '../lists/SinglyLinkedList';

type selection = 'insert' | 'search' | 'delete' | '';

interface Props {
  operate: OperateFunction;
}

interface State {
  selectedOperation: selection;
  functionBoxText: string;
}

export const Sidebar: React.FC<Props> = ({ operate }) => {
  const [state, setState] = useState<State>({
    selectedOperation: 'search',
    functionBoxText: '',
  });

  const setDisplay = (selection: selection) => {
    setState({ ...state, selectedOperation: selection });
  };

  return (
    <StyledSidebar>
      <SidebarOperationsMenu setDisplay={setDisplay} selected={state.selectedOperation} />
      {state.selectedOperation === 'insert' && (
        <Operations operate={operate} render={(zippedProps) => <InsertOperations {...zippedProps} />} />
      )}
      {state.selectedOperation === 'search' && (
        <Operations operate={operate} render={(zippedProps) => <SearchOperations {...zippedProps} />} />
      )}
      {state.selectedOperation === 'delete' && (
        <Operations operate={operate} render={(zippedProps) => <DeleteOperations {...zippedProps} />} />
      )}

      {state.functionBoxText && <h2>Function:</h2>}
      <FunctionTextBox functionBody={state.functionBoxText} />
    </StyledSidebar>
  );
};
