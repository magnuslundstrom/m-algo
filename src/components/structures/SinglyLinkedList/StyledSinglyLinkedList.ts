import styled from 'styled-components';
export const StyledSinglyLinkedList = styled.div`
  h1 {
    color: var(--light-gray);
  }
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: var(--md);
  align-items: start;

  .list-wrapper {
    background-color: var(--gray);
    padding: var(--md);
    border: 1px solid var(--light-gray);
  }
`;
