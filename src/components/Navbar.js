import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar-container">
    <h2 className="navbar-logo">TODO</h2>
    <ul className="navbar">
      <li className="navbar-list">
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/About">About</NavLink>
      </li>
    </ul>
  </div>

);

export default NavBar;
