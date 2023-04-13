import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from '../components/auth/LoginForm';
import { auth } from '../firebase/firebase';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions, uiActions } from '../store';

function LoginPage() {
  const dispatch = useDispatch();
  function loginUser({ email, password }) {
    // prasideda loading
    dispatch(uiActions.showLoading());
    console.log('{ email, password } ===', { email, password });
    // email ir password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('login success');
        // ivykdyti veiksma reduxe
        dispatch(
          authActions.login({
            email: user.email,
            uid: user.uid,
          }),
        );
        dispatch(uiActions.showSuccess('User logged in'));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn('login fail', errorMessage);
        // Todo:  uiActions.showError
      });
  }
  return (
    <div className="container">
      <h1>LoginPage</h1>
      <p>This is LoginPage</p>
      <Link to={'/register'}>Or maybe register?</Link>

      <LoginForm onLogin={loginUser} />
    </div>
  );
}

export default LoginPage;
