import React, { useState } from 'react';
import { Box, Button, Typography, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DemoInfo: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Navigate to the next view or handle the mock profile generation
      console.log('Mock profile generated');
      navigate('/mock-profile'); // Replace with the actual route if needed
    }, 3000); // Simulate loading time
  };

  return (
    <Box className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4 py-8">
      <Typography variant="h4" sx={{ mb: 8, px: 2 }}>Demo Information</Typography>
      <Typography variant="body1" sx={{ mb: 8, px: 2 }}>
        Normally, we would prompt the company employees to answer surveys on our platform to create a values profile for the company. 
        But now we will simulate it.
      </Typography>
      {loading ? (
        <Box className="w-full max-w-md" sx={{ px: 2 }}>
          <LinearProgress />
          <Typography variant="body2" sx={{ mt: 4, textAlign: 'center' }}>Generating mock employee reviews for your company...</Typography>
        </Box>
      ) : (
        <Button onClick={handleConfirm} variant="contained" color="primary" fullWidth sx={{ px: 2 }}>
          Confirm
        </Button>
      )}
    </Box>
  );
};

export default DemoInfo;