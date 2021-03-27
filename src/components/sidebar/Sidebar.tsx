import React, { useState } from 'react';
import { FunctionTextBox } from './FunctionTextBox';
import { StyledSidebar } from './StyledSidebar';
import { InsertOperationsMenu } from '../lists/InsertOperationsMenu';
import { SidebarOperations } from '../lists/SidebarOperations';
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
    selectedOperation: 'insert',
    functionBoxText: '',
  });

  const curriedOperate = () => operate.bind(null, '1', '1');

  const setDisplay = (selection: selection) => {
    setState({ ...state, selectedOperation: selection });
  };

  return (
    <StyledSidebar>
      <SidebarOperations setDisplay={setDisplay} selected={state.selectedOperation} />
      {state.selectedOperation === 'insert' && <InsertOperationsMenu operate={operate} />}
      {state.functionBoxText && <h2>Function:</h2>}
      <FunctionTextBox functionBody={state.functionBoxText} />
    </StyledSidebar>
  );
};
