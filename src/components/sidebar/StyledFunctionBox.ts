import styled from 'styled-components';
import { colors, spacing } from '../variables';
export const StyledFunctionBox = styled.div`
  color: ${colors.c100};
  padding: ${spacing.md};
  ${(props: { display: string }) => props.display && 'border: 1px solid ' + colors.c100};
  margin-top: ${spacing.lg};
`;
