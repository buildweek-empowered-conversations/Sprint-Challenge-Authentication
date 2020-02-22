import React, {useState} from 'react';
import axios from 'axios';
import cors from 'cors';

import {axiosWithAuth} from  '../utils/axiosWithAuth'
const Register =( )=> {
  
    const [userData, setUserData ] = useState({
        username: '',
        password: '',
        
    
     });


     const handleInput =(e)=> { 
          
        setUserData({
            
            ...userData,
            [e.target.name]: e.target.value});


      };

      const onSubmit = (e)=> {
          e.preventDefault();
          axios 
          .post('http://localhost:3300/api/auth/register', userData)
          .then(res=> {localStorage.setItem('token', res.data.token )} )
           .catch(err=> console.log(err))
          console.log("REG", userData)
        //   props.history.push('/dashboard')
      }

    return (

        <>
         <h1>Register</h1>
        <form type = 'submit' onSubmit = {onSubmit}
        className= 'reg-form'>

            <input
            type ='text' 
            name ='username'
             onChange = {handleInput}
             value = {userData.username}
             placeholder= 'username'
             
             
             /> 
              <input
       type ='password'
       value ={userData.password}
       name= 'password'
       onChange = {handleInput}
      placeholder = 'password'
      
      />

      
 
      <button type = 'submit' onSubmit ={onSubmit}>ENTER</button>
        </form>
        </>


    )
}

export default Register