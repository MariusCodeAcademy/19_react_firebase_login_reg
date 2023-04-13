import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.scss';
import { useSelector } from 'react-redux';
import Logout from '../auth/Logout';

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <header>
      <div className="container">
        <Link to={'/'} className="logo">
          Logo
        </Link>
        <nav>
          <NavLink className="navItem" to={'/'}>
            Home page
          </NavLink>
          {isLoggedIn && (
            <NavLink className="navItem" to={'/profile'}>
              Profile
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink className="navItem" to={'/login'}>
              <Logout />
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink className="navItem" to={'/login'}>
              Login
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
