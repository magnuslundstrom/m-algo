import styled from 'styled-components';
import { colors, spacing } from '../variables';
export const StyledHeader = styled.div`
  padding: ${spacing.md};
  background-color: ${colors.c400};
  display: flex;
  justify-content: space-between;

  a {
    color: ${colors.c100};
    text-decoration: none;
  }
`;
