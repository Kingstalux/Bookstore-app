import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <>
    <nav className="nav">
      <div className="sub-nav-1 flex">
        <div className="logo">
          <p>Bookstore CMS</p>
        </div>
        <div className="links">
          <ul className="flex">
            <li className="books">
              <NavLink to="/" activeclassname="active">BOOKS</NavLink>
            </li>
            <li className="categories">
              <NavLink to="/categories" activeclassname="active">CATEGORIES</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="icon">
        <p>ICON</p>
      </div>
    </nav>
  </>
);

export default NavBar;
