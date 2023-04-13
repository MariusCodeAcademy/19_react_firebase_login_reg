import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.scss';
import { useSelector } from 'react-redux';

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  function logoutFire() {
    // https://firebase.google.com/docs/auth/web/password-auth#next_steps
    // redux logout
  }

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
              <button>Logout</button>
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
