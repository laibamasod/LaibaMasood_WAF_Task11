import React from 'react';
import { useState, useContext }  from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { UserDataContext } from '../UserDataContext';
function Home() {
    const navigate = useNavigate();
  
    const { userName } = useContext(UserDataContext);
  //  username set ussing UseContext
  return (
  <div>
     <h1>Hello {userName}!</h1>
    <h2>Home Page</h2>;
  <button onClick={() => navigate('/order-confirmation')}>Confirm Order</button>
</div>
  );
}

export default Home;