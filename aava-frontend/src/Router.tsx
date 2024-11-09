import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Walkthrough from './components/Walkthrough'; // Ensure this path is correct
import SurveyView from './SurveyView/SurveyView';
import ProfileCreation from './components/ProfileCreation'; // Ensure this path is correct
import SurveyView2 from './components/SurveyView2';

const surveyTitles = ['Work-Life Balance',
  'Mental Health Support',
  'Flexible Working Conditions and Workplace Culture',
  'Career and Skill Development',
  'Diversity and Inclusion'];
  
const surveyQuestions = [
  ['Question 1.1', 'Question 1.2', 'Question 1.3'],
  ['Question 2.1', 'Question 2.2', 'Question 2.3'],
  ['Question 3.1', 'Question 3.2', 'Question 3.3'],
  ['Question 4.1', 'Question 4.2', 'Question 4.3'],
  ['Question 5.1', 'Question 5.2', 'Question 5.3']
];

const handleFinish = (values: number[][]) => {
  const averages = values.map(pageValues => pageValues.reduce((a, b) => a + b, 0) / pageValues.length);
  console.log('Averages:', averages);
  // Trigger event or send data to backend
};

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Walkth" element={<Walkthrough />} />
        <Route path="/survey/:id" element={<SurveyView />} />
        <Route path="/crtprof" element={<ProfileCreation />} />
        <Route path="/surveyfreshprofile" element={<SurveyView2 titles={surveyTitles} questions={surveyQuestions} onFinish={handleFinish} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;