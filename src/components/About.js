import React from 'react';
import { useContext }  from 'react';
import { UserDataContext } from '../UserDataContext';
function About() {
  const { userName } = useContext(UserDataContext);


  return (
    <div>
       <h1>Hello {userName}!</h1>
      <h2>About Page</h2>
   
    </div>
  );
}

export default About;
