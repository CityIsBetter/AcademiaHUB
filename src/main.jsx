import React from 'react'
import ReactDOM from 'react-dom/client'
import SignIn from './component/googleSignIn/signIn.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SignIn />
  </BrowserRouter>
)
