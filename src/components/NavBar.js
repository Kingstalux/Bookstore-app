import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <>
    <nav className="nav">
      <div className="logo">
        <p>Bookstore CMS</p>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">Books</NavLink>
          </li>
          <li>
            <NavLink to="/categories" activeclassname="active">Categories</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default NavBar;
