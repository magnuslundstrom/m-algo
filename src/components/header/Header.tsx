import { FunctionComponent } from 'react';
import { StyledHeader } from './StyledHeader';

const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <a href='/'>m-algo</a>
      <div>
        <a href='/singly'>singly linked list</a>
      </div>
    </StyledHeader>
  );
};

export default Header;
