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
            <NavLink to="/" activeClassName="active">Books</NavLink>
          </li>
          <li>
            <NavLink to="/categories" activeClassName="active">Categories</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default NavBar;
