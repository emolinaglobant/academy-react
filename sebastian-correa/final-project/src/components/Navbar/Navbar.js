import React from 'react';
import whiteLogo from './../../assets/img/globant-white-logo.png';
import Search from '../Search/Search';
import './Navbar.css';

const Navbar = ({ searchResults }) => {
  return (
    <section className='navbar'>
      <figure className='navbar-logo-container'>
        <img src={whiteLogo} className='navbar-logo' />
      </figure>
      <Search searchResults={searchResults} />
    </section>
  );
};

export default Navbar;
