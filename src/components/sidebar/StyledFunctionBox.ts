import styled from 'styled-components';
export const StyledFunctionBox = styled.div<{ display: string }>`
  color: var(--white);
  padding: var(--md);
  ${({ display }) => display && 'border: 1px solid var(--black)'};
  margin-top: var(--lg);
`;
