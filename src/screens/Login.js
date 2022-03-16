import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Snackbar, Alert } from '@mui/material';

import '../App.css';
import '../styles/Login.css';

import logo from '../assets/pixiliveicon.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [snackOpen, setSnackOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleClickLogin = () => {
    const loginData = {
      email: email,
      password: password,
    };

    axios
      .post(`${process.env.REACT_APP_URL_API}/users/login`, loginData)
      .then((results) => {
        // stocker jwt response in local storage
        localStorage.setItem('sessionToken', results.data.jwt);
        // redirect to dashboard "/"
        window.location = '/';
      })
      .catch((err) => {
        // show pop up with error
        setSnackOpen(true);
        setErrorMsg(err.response.data);
      });
  };

  const handleClose = () => {
    setSnackOpen(false);
  };

  return (
    <div className="App">
      <div className="bodyContainer flex">
        <div className="login-auth-left">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="login-auth-right login-border">
          <h2>LOG IN</h2>
          <div className="login flex col">
            {/* <label htmlFor="email">Email</label> */}
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            {/* <label htmlFor="password">Password</label> */}
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <Link to="" class="forgot">
              Forgot password?
            </Link>
            <div className="button flex col aic jcc">
              <button className="loginBtn" onClick={() => handleClickLogin()}>
                Log In
              </button>
              <Snackbar
                open={snackOpen}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                autoHideDuration={6000}
                onClose={() => handleClose()}
              >
                <Alert onClose={() => handleClose()} severity="error" sx={{ width: '100%' }}>
                  {errorMsg.error || errorMsg}
                </Alert>
              </Snackbar>
              <div>
                Not registered? <Link to="/register">Create an account!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
