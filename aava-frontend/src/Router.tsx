import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Walkthrough from './components/Walkthrough';
import SurveyView from './SurveyView/SurveyView';
import ProfileCreation from './components/ProfileCreation';
import SurveyView2 from './components/SurveyView2';
import CompanyForm from './components/CompanyCreation';
import DemoInfo from './components/DemoInfo';

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

const updateWellbeingValues = async (applicantId: string, averages: number[]) => {
  try {
    const wellbeingValues = surveyTitles.map((title, index) => ({
      name: title,
      weight: averages[index],
    }));
    console.log('Wellbeing values:', wellbeingValues);

    for (const value of wellbeingValues) {
      const response = await fetch(`http://localhost:1337/applicants/wellbeing/${applicantId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error updating wellbeing value: ${response.statusText} - ${errorText}`);
      }

      console.log('Applicant wellbeing value updated successfully:', value);
    }
  } catch (error) {
    console.error('Error updating wellbeing values:', error);
  }
};

const handleFinish = async (values: number[][]): Promise<void> => {
  const averages = values.map(pageValues => pageValues.reduce((a, b) => a + b, 0) / pageValues.length);
  console.log('Averages:', averages);

  try {
    const applicantId = await createApplicant();
    console.log('Applicant created successfully:', applicantId);
    await updateWellbeingValues(applicantId, averages);
  } catch (error) {
    console.error('Error:', error);
  }
};

const createApplicant = async () => {
  const applicantResponse = await fetch('http://localhost:1337/applicants', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: 'John2',
      lastName: 'Doe', // Replace with actual data
      email: 'john.doe@example.com',
      bio: 'I am a software developer with a passion for wellbeing.',
    }),
  });

  if (!applicantResponse.ok) {
    throw new Error(`Error creating applicant: ${applicantResponse.statusText}`);
  }

  const applicantData = await applicantResponse.json();
  return applicantData.id;
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
        <Route path="/company-form" element={<CompanyForm />} />
        <Route path="/demo-info" element={<DemoInfo />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;