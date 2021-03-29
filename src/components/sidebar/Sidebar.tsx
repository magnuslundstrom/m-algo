import React, { useState } from 'react';
import { FunctionTextBox } from './FunctionTextBox';
import { StyledSidebar } from './StyledSidebar';
import { Operations } from '../core/Operations';
import { InsertOperations } from '../structures/SinglyLinkedList/operations/InsertOperations';
import { SearchOperations } from '../structures/SinglyLinkedList/operations/SearchOperations';
import { DeleteOperations } from '../structures/SinglyLinkedList/operations/DeleteOperations';
import { SidebarOperations as SidebarOperationsMenu } from './SidebarOperations';
import { OperateFunction } from '../structures/SinglyLinkedList/SinglyLinkedList';

type selection = 'insert' | 'search' | 'delete' | '';

interface Props {
  operate: OperateFunction;
  functionBody: string;
}

interface State {
  selectedOperation: selection;
}

export const Sidebar: React.FC<Props> = ({ operate, functionBody }) => {
  const [state, setState] = useState<State>({
    selectedOperation: 'insert',
  });

  const setDisplay = (selection: selection) => {
    setState({ selectedOperation: selection });
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

      {functionBody && <FunctionTextBox functionBody={functionBody} />}
    </StyledSidebar>
  );
};
