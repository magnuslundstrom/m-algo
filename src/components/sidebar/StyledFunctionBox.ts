import styled from 'styled-components';
export const StyledFunctionBox = styled.div<{ display: string }>`
  color: var(--light-gray);
  padding: var(--md);
  ${({ display }) => display && 'border: 1px solid var(--light-gray)'};
  margin-top: var(--lg);
`;
