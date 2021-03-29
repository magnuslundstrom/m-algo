import styled from 'styled-components';
export const StyledHeader = styled.div`
  padding: var(--md);
  background-color: var(--gray);
  border: 1px solid var(--light-gray);
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--md);
  a {
    text-decoration: none;
    color: var(--light-gray);
  }
  div {
    a {
      margin-left: var(--lg);
    }
  }
`;
