import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';

const NavBar = () => (
  <>
    <nav className="nav flex">
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
        <p><FaRegUserCircle /></p>
      </div>
    </nav>
  </>
);

export default NavBar;
