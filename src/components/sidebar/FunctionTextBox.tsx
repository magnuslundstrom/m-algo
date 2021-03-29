import { FunctionComponent, PropsWithChildren } from 'react';
import { StyledFunctionBox } from './StyledFunctionBox';
export interface FunctionTextBoxProps {
  functionBody: string;
}

export const FunctionTextBox: FunctionComponent<PropsWithChildren<FunctionTextBoxProps>> = ({ functionBody }) => {
  const reg = /_([a-zA-Z]+)__WEBPACK_IMPORTED_MODULE_[0-9]__\["[a-zA-Z]+"\]/;
  functionBody = functionBody.replace(reg, '$1');

  return (
    <StyledFunctionBox display={functionBody}>
      <h3>Function:</h3>
      <pre>{functionBody}</pre>
    </StyledFunctionBox>
  );
};
