import styled from 'styled-components';
import { colors, spacing } from '../variables';
export const StyledSinglyLinkedList = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: ${spacing.md};

  .list-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
`;
