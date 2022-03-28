import React from 'react';
import { useAuth } from '../hooks/useAuth';

function LoginBtn() {
  // Destructing our hook to get the `login` function
  const { login } = useAuth();

  return (
    <div className="auth">
      <button onClick={login}>Login</button>
    </div>
  );
}

export default LoginBtn;
