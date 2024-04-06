import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const navbarStyle = {
        backgroundColor: '#333', 
        padding: '10px', 
      };
    
      const linkStyle = {
        color: 'white', 
        marginRight: '10px', 
        textDecoration: 'none', 
      };
  return (
    <nav style={navbarStyle}>
     
          <NavLink to="/" style={linkStyle}>Home</NavLink>
          <NavLink to="/about" style={linkStyle}>About</NavLink>
          <NavLink to="/products" style={linkStyle}>Products</NavLink>
          <NavLink to="/user" style={linkStyle}>User</NavLink>
    </nav>
  );
}

export default Navbar;
