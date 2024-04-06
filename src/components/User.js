import React from 'react';
import {useState, useContext} from 'react';
import { UserDataContext } from '../UserDataContext';
function User({onNameSubmit}) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const { setUserName } = useContext(UserDataContext);
    const onSubmit = (e)=>{
        e.preventDefault(); 
        setUserName(name);
        console.log("form submitted");
    }
    const onNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
      };
    
    
  return (
  
    <div>
      <h2>User</h2>
      <form onSubmit={onSubmit}>
      <input type="text" id="name" name="name" placeholder=" Enter User Name " onChange={onNameChange} />
      <input type="submit" />
      </form>
    </div>
  );
}

export default User;
