import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Walkthrough from './components/Walkthrough'; // Ensure this path is correct

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Walkth" element={<Walkthrough />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;