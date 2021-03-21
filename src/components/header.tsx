import { FunctionComponent } from 'react';
import { colors } from '../colors';
const Header: FunctionComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: colors.c400, padding: '25px' }}>
      <a href='/' style={{ color: colors.c100, textDecoration: 'none' }}>
        m-aglo
      </a>
      <div>
        <a href='/singly' style={{ textDecoration: 'none', color: colors.c100 }}>
          singly linked list
        </a>
      </div>
    </div>
  );
};

export default Header;
