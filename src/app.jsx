import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Physical } from './physical/physical';
import { Select } from './select/select';
import { About } from './about/about';
import { Intellectual } from './intellectual/intellectual';

export default function App() {
  const userName = localStorage.getItem('userName');
  
  return  ( 
  <BrowserRouter>
  <div className="app-container bg-dark text-light">
    <header>
      <nav>
        <div className="navbar-brand">LevelUP</div>
        <menu>
            <li className="nav-item"><NavLink to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink to="about">About</NavLink></li>
            {userName && (
              <li className="nav-item"><NavLink to="select">Select Category</NavLink></li>
            )}
        </menu>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/select/physical" element={<Physical />} />
        <Route path="/select" element={<Select />} />
        <Route path="/about" element={<About />} />
        <Route path="/select/intellectual" element={<Intellectual />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <footer>
      <span className="author-name">Sawyer Whipperman</span>
      <a className="repo-link"href="https://github.com/sawyer-57/Startup.git">GitHub</a>
    </footer>
</div>
</BrowserRouter>
  ); 
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}