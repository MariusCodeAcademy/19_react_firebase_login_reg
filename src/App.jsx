import './styles/reset.css';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/layout/Header';
import { app } from './firebase/firebase';

function App() {
  return (
    <div className="">
      <Header />
      <h2>Env reikme VITE_NAME: {import.meta.env.VITE_NAME}</h2>
      <h2>Env reikme DB: {import.meta.env.DB}</h2>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}
export default App;
