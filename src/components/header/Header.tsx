import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import { StyledHeader } from './StyledHeader';

const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <Link to='/'>m-algo</Link>
      <div>
        <Link to={routes.singlyLinkedList}>singly linked list</Link>
        <Link to={routes.why}>why?</Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
