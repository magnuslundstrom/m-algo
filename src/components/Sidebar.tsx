import { FunctionComponent, PropsWithChildren } from 'react';
import { FunctionTextBox, FunctionTextBoxProps } from './FunctionTextBox';
import { colors } from '../colors';

type props = PropsWithChildren<{}> & FunctionTextBoxProps;

export const Sidebar: FunctionComponent<props> = ({ children, functionBody }) => {
  return (
    <div style={{ backgroundColor: colors.c400 }}>
      {children}
      Hi from sidebar!
      <FunctionTextBox functionBody={functionBody} />
    </div>
  );
};
