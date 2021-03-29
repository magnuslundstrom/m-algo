import React, { useState } from 'react';
import { StyledMenuButton } from '../pure/buttons/StyledOperateButton';

type selection = 'insert' | 'search' | 'delete' | '';

interface Props {
  setDisplay: (operation: selection) => void;
  selected: selection;
}

export const SidebarOperations: React.FC<Props> = ({ setDisplay, selected }) => {
  return (
    <div>
      <StyledMenuButton onClick={() => setDisplay('insert')} highlight={selected === 'insert'}>
        Insert
      </StyledMenuButton>
      <StyledMenuButton onClick={() => setDisplay('search')} highlight={selected === 'search'}>
        Search
      </StyledMenuButton>
      <StyledMenuButton onClick={() => setDisplay('delete')} highlight={selected === 'delete'}>
        Delete
      </StyledMenuButton>
    </div>
  );
};
