import { useState, useEffect } from 'react';
import './App.css';
import LogoScreen from './components/LogoScreen';
import LoginForm from './components/LoginForm';
import ProfileCreation from './components/ProfileCreation';
import { useNavigate } from 'react-router-dom';

function App() {
  const [showLogo, setShowLogo] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000); // Show logo for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    navigate('/profile-creation'); // Navigate to the profile creation view after login
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      {showLogo ? (
        <LogoScreen />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;