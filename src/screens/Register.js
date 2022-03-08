import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Snackbar, Alert } from '@mui/material';

import '../App.css';
import '../styles/Login.css';

import image from '../assets/modele.jpg';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [snackOpen, setSnackOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleClickRegister = () => {
    const registerData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    // console.log(registerData);

    axios
      .post(`${process.env.REACT_APP_URL_API}/users`, registerData)
      .then((results) => {
        console.log(results);
        window.location = '/login';
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
          <img src={image} alt="" />
        </div>
        <div className="login-auth-right login-border">
          <h2>REGISTER</h2>
          <div className="login flex col">
            {/* <label htmlFor="firstName">Firstname</label> */}
            <input type="text" placeholder="firstname" onChange={(e) => setFirstName(e.target.value)} />
            {/* <label htmlFor="lastName">Lastname</label> */}
            <input type="text" placeholder="lastname" onChange={(e) => setLastName(e.target.value)} />
            {/* <label htmlFor="email">Email</label> */}
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            {/* <label htmlFor="password">Password</label> */}
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <div className="button flex col aic jcc">
              <button className="registerBtn" onClick={() => handleClickRegister()}>
                Register
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
                Already have an account? <Link to="/login">Log in!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
