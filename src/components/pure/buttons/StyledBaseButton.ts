import styled from 'styled-components';
export const BaseButton = styled.button`
  padding: var(--sm) var(--md);
  border-radius: var(--xs);
  border: 0px;
  margin-bottom: var(--md);
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
