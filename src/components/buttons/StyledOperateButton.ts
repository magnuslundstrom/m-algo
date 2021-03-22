import styled from 'styled-components';
import { colors, spacing } from '../variables';
export const StyledOperateButton = styled.button`
  color: ${colors.c100};
  background-color: ${colors.cta};
  display: block;
  margin-bottom: ${spacing.sm};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${spacing.xs};
  border: 0px;
`;
