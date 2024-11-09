import React from 'react';
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProfileCreation: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (type: string) => {
    console.log(`${type} card clicked`);
    if (type === 'Looking for a job') {
      navigate('/surveyfreshprofile');
    }
    // Add navigation or other logic here
  };

  return (
    <Box className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <Typography variant="h4" sx={{ mb: 4 }}>I am</Typography>
      <Box className="flex justify-center space-x-4 w-full max-w-4xl px-4">
        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', maxWidth: '300px', height: '300px' }}>
          <CardActionArea onClick={() => handleCardClick('Looking for a job')} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <Box sx={{ flexGrow: 1 }}></Box> {/* Placeholder for future image */}
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px' }}>
              <Typography variant="h6" className="text-center" noWrap>Looking for a job</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', maxWidth: '300px', height: '300px' }}>
          <CardActionArea onClick={() => handleCardClick('Offering a job')} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <Box sx={{ flexGrow: 1 }}></Box> {/* Placeholder for future image */}
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px' }}>
              <Typography variant="h6" className="text-center" noWrap>Offering a job</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default ProfileCreation;