import React, { FunctionComponent } from 'react';
import Header from './header';
const style = {
  maxWidth: '1200px',
  margin: '50px auto',
};

const container: FunctionComponent = ({ children }) => {
  return (
    <div style={style}>
      <Header />
      {children}
    </div>
  );
};

export default container;
