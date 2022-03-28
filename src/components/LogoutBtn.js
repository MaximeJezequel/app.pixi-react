import React from 'react';
import { useAuth } from '../hooks/useAuth';

function LogoutBtn() {
  // Destructing our hook to get the `logout` function
  const { logout } = useAuth();

  return (
    <div className="auth">
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default LogoutBtn;
