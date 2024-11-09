import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Walkthrough from './components/Walkthrough'; // Ensure this path is correct
import SurveyView from './SurveyView/SurveyView';
import ProfileCreation from './components/ProfileCreation'; // Ensure this path is correct

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Walkth" element={<Walkthrough />} />
        <Route path="/survey/:id" element={<SurveyView />} />
        <Route path="/crtprof" element={<ProfileCreation />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;