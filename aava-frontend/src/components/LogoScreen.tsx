import React from 'react';
import jobberLogo from '../assets/jobberlogo.svg'; // Ensure this path is correct

const LogoScreen: React.FC = () => {
  return (
    <header className="flex flex-col items-center">
      <div className="flex justify-center items-center mb-4">
        <img src={jobberLogo} className="h-40 md:h-60" alt="Jobber logo" />
      </div>
    </header>
  );
};

export default LogoScreen;