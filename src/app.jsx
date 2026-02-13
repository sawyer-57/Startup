import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return <div className="app-container bg-dark text-light">
    <header>
      <nav>
        <a className="navbar-brand">LevelUP</a>
        <menu>
            <li className="nav-item"><a href="index.html">Home</a></li>
            <li className="nav-item"><a href="about.html">About</a></li>
            <li className="nav-item"><a href="select.html">Select Category</a></li>
        </menu>
      </nav>
    </header>
    <main className='flex-grow-1 container-fluid text-center'>App Components go Here </main>
    <footer>
      <span className="author-name">Sawyer Whipperman</span>
      <a className="repo-link"href="https://github.com/sawyer-57/Startup.git">GitHub</a>
    </footer>
</div>;
}