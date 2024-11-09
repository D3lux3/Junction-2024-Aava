import React from 'react';
import jobberLogo from '../assets/jobberlogo.svg';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, TextField } from '@mui/material';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/Walkth');
  };

  return (
    <Box className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <Box className="flex flex-col items-center mb-8">
        <img src={jobberLogo} className="h-40 md:h-60 mb-4" alt="Jobber logo" />
        <Typography variant="h6" className="mb-4">Swipe into your future</Typography>
      </Box>
      <Box className="flex space-x-4">
        <Button
          onClick={handleNavigation}
          variant="contained"
          sx={{ backgroundColor: '#4a4a4a', '&:hover': { backgroundColor: '#333' } }}
          className="w-40"
        >
          Register
        </Button>
        <Button
          onClick={handleNavigation}
          variant="outlined"
          color="white"
          className="w-40"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;