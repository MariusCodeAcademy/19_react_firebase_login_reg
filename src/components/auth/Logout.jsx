import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, uiActions } from '../../store';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

function Logout() {
  const isUser = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  function logoutFire() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(authActions.logout());
        dispatch(uiActions.showSuccess('User logged out'));
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return !isUser ? null : <button onClick={logoutFire}>Logout</button>;
}

export default Logout;
