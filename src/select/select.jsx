import React from 'react';
import "./select.css";
import { NavLink } from 'react-router-dom';

export function Select() {
  return (
    <div className='page-content'> 
        <p id="select-header"> Select a category to begin leveling up your skills! </p>
        <div> 
            <NavLink id="physical-link" to = "/select/physical" > Physical Skills </NavLink>
        </div>
        <div> 
            <NavLink id="intellectual-link" to = "/select/intellectual" > Intellectual Skills </NavLink>
        </div>
    </div>

  );
}