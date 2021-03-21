import { FunctionComponent, PropsWithChildren } from 'react';
import { colors } from '../colors';
interface Props {
  functionBody: string;
}
export const FunctionTextBox: FunctionComponent<PropsWithChildren<Props>> = (props) => {
  return (
    <div style={{ backgroundColor: colors.dark, color: colors.sand, padding: '25px', borderRadius: '10px' }}>
      <pre>{props.functionBody}</pre>
    </div>
  );
};
