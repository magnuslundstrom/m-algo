import { FunctionComponent } from 'react';
import { colors } from '../colors';
const Header: FunctionComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: colors.darkBlue, padding: '25px' }}>
      <a href='/' style={{ color: colors.sand, textDecoration: 'none' }}>
        m-aglo
      </a>
      <div>
        <a href='/singly' style={{ textDecoration: 'none', color: colors.sand }}>
          singly linked list
        </a>
      </div>
    </div>
  );
};

export default Header;
