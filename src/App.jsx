import './styles/reset.css';
import './styles/App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/layout/Header';
import RegisterPage from './pages/RegisterPage';
import Feedback from './components/ui/feedback/Feedback';
import { useSelector } from 'react-redux';

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div className="">
      <Header />
      <div className="container">
        <Feedback />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to={'/profile'} /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to={'/profile'} /> : <RegisterPage />}
        />
      </Routes>
    </div>
  );
}
export default App;
