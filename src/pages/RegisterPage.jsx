import { Link } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

function RegisterPage() {
  function registerFireBase({ email, password }) {
    console.log('{ email, password } ===', { email, password });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('user ===', user);
        // ...redux
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn('errorMessage ===', errorMessage);
        // ..
      });
  }
  return (
    <div className="container">
      <h1>Register Here</h1>
      <p>This is RegisterPage</p>
      <Link to={'/login'}>Or maybe login?</Link>
      <RegisterForm onRegister={registerFireBase} />
    </div>
  );
}

export default RegisterPage;
