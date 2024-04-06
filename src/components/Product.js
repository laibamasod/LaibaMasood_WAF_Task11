import React from 'react';
import {Link , Outlet} from 'react-router-dom';
import { useState, useContext }  from 'react';
import { useNavigate} from 'react-router-dom';
import { UserDataContext } from '../UserDataContext';
import NewProducts from './NewProducts';
function Product() {
  const { userName } = useContext(UserDataContext);
  const productData = {
    title: "New Products",
    description: "Explore our latest offerings!",
  };
  
    const navbarStyle = {
        // backgroundColor: '#333', 
        padding: '10px',
        marginTop: "20px", 
      };
    
      const linkStyle = {
        color: '#333', 
        marginRight: '10px', 
        textDecoration: 'none', 
      };
  return (
    <>
    <div>
    <h1>Hello {userName}!</h1>
      <h2>Products</h2>
      <input type="text" placeholder="Search Products" />
      </div>
      <nav style={navbarStyle}>
        {/* <Link to="featured" style={linkStyle}> Featured </Link> */}
        {/* <Link to="new" style={linkStyle}> New </Link> */}
        </nav>
        <NewProducts productData={productData} />
   
    </>
  );
}

export default Product;
