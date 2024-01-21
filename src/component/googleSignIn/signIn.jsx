import {React, useState, useEffect } from 'react';
import { auth, provider } from './config.js';
import { signInWithPopup } from 'firebase/auth'
import App from '../../App.jsx';
import GoogleButton from 'react-google-button'
import './signIn.css';

const SignIn = () => {

    const [email, setValue] = useState('');

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email-unihub", data.user.email);
        });
    };

    useEffect(() => {
      setValue(localStorage.getItem('email-unihub'))
    });
    

  return (
    <div>
        {email ? <App /> : 
        <div className='signIn_wrapper'>
          <div className='signIn_container'>
            <h2>Welcome to <span>AcademiaHUB</span></h2>
            <p>Please sign in with your google account to continue</p>
            <GoogleButton onClick={() => handleClick()} />
          </div>
        </div>
        }
    </div>
  )
}


export default SignIn;