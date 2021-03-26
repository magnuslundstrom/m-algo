import styled from 'styled-components';
import { BaseButton } from './StyledBaseButton';

type OperationButtonProps = {
  noMarg?: boolean;
};

export const StyledOperationButton = styled(BaseButton)<OperationButtonProps>`
  background-color: var(--pink);
  color: var(--white);
  display: block;
  margin: ${(props) => (props.noMarg ? '0px' : '10px 0px')};
`;

type MenuButtonProps = {
  highlight: boolean;
};

export const StyledMenuButton = styled(BaseButton)<MenuButtonProps>`
  text-decoration: ${({ highlight }) => (highlight ? 'underline' : 'none')};
  background-color: var(--gray);
  color: var(--black);
  margin-right: 10px;
  padding: 0px;
`;
