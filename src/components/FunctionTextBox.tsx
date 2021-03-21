import { FunctionComponent, PropsWithChildren } from 'react';
import { colors } from '../colors';
export interface FunctionTextBoxProps {
  functionBody: string;
}
export const FunctionTextBox: FunctionComponent<PropsWithChildren<FunctionTextBoxProps>> = ({ functionBody }) => {
  const reg = /_([a-zA-Z]+)__WEBPACK_IMPORTED_MODULE_0__\["[a-zA-Z]+"\]/;
  functionBody = functionBody.replace(reg, '$1');

  return (
    <div style={{ backgroundColor: colors.c400, color: colors.c100, padding: '25px', borderRadius: '10px' }}>
      <pre>{functionBody}</pre>
    </div>
  );
};
