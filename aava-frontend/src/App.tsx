import { useState, useEffect } from 'react';
import './App.css';
import LogoScreen from './components/LogoScreen';
import LoginForm from './components/LoginForm';

function App() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000); // Show logo for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      {showLogo ? <LogoScreen /> : <LoginForm />}
    </div>
  );
}

export default App;