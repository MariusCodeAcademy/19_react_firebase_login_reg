import { Link } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';

function RegisterPage() {
  function registerFireBase() {}
  return (
    <div className="container">
      <h1>Register Here</h1>
      <p>This is RegisterPage</p>
      <Link to={'/login'}>Or maybe login?</Link>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
