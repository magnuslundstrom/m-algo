import { FunctionComponent } from 'react';
import Header from '../header/Header';
import { StyledContainer } from './StyledContainer';

const container: FunctionComponent = ({ children }) => {
  return (
    <StyledContainer>
      <Header />
      {children}
    </StyledContainer>
  );
};

export default container;
