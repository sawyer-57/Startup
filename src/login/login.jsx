import React, { useState } from 'react'; 


export function Login() {
  const [userName, setUserName] = useState(''); 
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email: userName,
        password: password,
      }),
    });

    if (response.ok) {
      localStorage.setItem('userName', userName);
      window.location.href = '/select';
    } else {
      alert('Login failed');
    }
  }

  async function handleSignup(e) {
    e.preventDefault();

    const response = await fetch('/api/auth/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email: userName,
        password: password,
      }),
    });

    if (response.ok) {
      localStorage.setItem('userName', userName);
      window.location.href = '/select';
    } else {
      alert('User already exists');
    }
  }

  return (
    <div className='page-content'>
        <h1 id="welcome-header">Welcome to</h1>
        <h1 id="levelup-header">LevelUP</h1>
        <h1 id="login-header">Login or sign up to get started!</h1>

        <form method="get" action="select" onSubmit={handleLogin}>
          <div className="login-input">
            <input type="text" placeholder="your@email.com" value={userName} onChange={(e) => setUserName(e.target.value)}/>
          </div>

          <div className="login-input">
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="d-flex justify-content-center gap-2">
            <button className="btn btn-primary btn-sm" onClick={handleLogin}>Login</button>
            <button className="btn btn-outline-light btn-sm" onClick={handleSignup}>Sign Up</button>
          </div>
      </form>
    </div>
  );
}