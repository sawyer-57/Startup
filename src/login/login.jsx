import React from 'react';

export function Login() {
  return (
    <div className='page-content'>
        <h1 id="welcome-header">Welcome to</h1>
        <h1 id="levelup-header">LevelUP</h1>
      <h1 id="login-header">Login or sign up to get started!</h1>
      <form method="get" action="select">
        <div className="login-input">
          <input type="text" placeholder="your@email.com" />
        </div>
        <div className="login-input">
          <input type="password" placeholder="password" />
        </div>
        <div className="d-flex justify-content-center gap-2">
            <button className="btn btn-primary btn-sm">Login</button>
            <button className="btn btn-outline-light btn-sm">Sign Up</button>
        </div>
      </form>
    </div>
  );
}