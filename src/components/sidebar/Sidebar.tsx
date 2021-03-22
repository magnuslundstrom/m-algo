import { FunctionComponent, PropsWithChildren } from 'react';
import { FunctionTextBox, FunctionTextBoxProps } from './FunctionTextBox';
import { StyledSidebar } from './StyledSidebar';

type SidebarProps = PropsWithChildren<{}> & FunctionTextBoxProps;
export const Sidebar: FunctionComponent<SidebarProps> = ({ children, functionBody }) => {
  return (
    <StyledSidebar>
      <div>{children}</div>
      <FunctionTextBox functionBody={functionBody} />
    </StyledSidebar>
  );
};
