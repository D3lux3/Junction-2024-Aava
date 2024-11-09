import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { Button, Box, Typography, IconButton } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Walkthrough: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    "Swipe into your future",
    "Swipe into your future 2",
    "Swipe into your future 3",
    "Swipe into your future 4"
  ];

  const handleNext = () => {
    navigate('/crtprof'); // Navigate to profile creation page
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % slides.length),
    onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length),
  });

  return (
    <Box className="flex flex-col items-center justify-between min-h-screen bg-white text-gray-800" {...handlers}>
      <Box className="flex-grow flex items-center justify-center">
        <Typography variant="h5" className="mb-4">
          {slides[currentSlide]}
        </Typography>
      </Box>
      <Box className="flex flex-col items-center mb-8 w-full px-4">
        <Box className="flex justify-center space-x-1 mb-6">
          {slides.map((_, index) => (
            <IconButton
              key={index}
              onClick={() => setCurrentSlide(index)}
              color={index === currentSlide ? 'primary' : 'default'}
              sx={{ padding: '4px' }} // Adjust padding to make the dots closer
            >
              <FiberManualRecordIcon fontSize="small" sx={{ fontSize: '12px' }} /> {/* Adjust fontSize to make the dots smaller */}
            </IconButton>
          ))}
        </Box>
        <Button
          onClick={handleNext}
          variant="contained"
          color="white"
          className="w-full max-w-md"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Walkthrough;