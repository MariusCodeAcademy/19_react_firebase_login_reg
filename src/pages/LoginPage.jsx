import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from '../components/auth/LoginForm';
import { auth } from '../firebase/firebase';

function LoginPage() {
  function loginUser({ email, password }) {
    console.log('{ email, password } ===', { email, password });
    // email ir password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('login success');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn('login fail', errorMessage);
      });
  }
  return (
    <div className="container">
      <h1>LoginPage</h1>
      <p>This is LoginPage</p>

      <LoginForm onLogin={loginUser} />
    </div>
  );
}

export default LoginPage;
