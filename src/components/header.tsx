import React, { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      m-aglo
      <div>
        <a href='/singly' style={{ textDecoration: 'none' }}>
          singly linked list
        </a>
      </div>
    </div>
  );
};

export default Header;
