import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className='App' data-testid="layout">
      {children}
    <Footer />
  </div>
);

export default Layout;