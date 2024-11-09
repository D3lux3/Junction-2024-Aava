import React from 'react';
import jobberLogo from '../assets/jobberlogo.svg';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/Walkth');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <div className="flex flex-col items-center mb-8">
        <img src={jobberLogo} className="h-40 md:h-60 mb-4" alt="Jobber logo" />
        <h1 className="text-2xl md:text-4xl mb-4">Swipe into your future</h1>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleNavigation}
          className="w-40 p-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        >
          Register
        </button>
        <button
          onClick={handleNavigation}
          className="w-40 p-2 bg-white text-black border border-black rounded hover:bg-gray-200"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;