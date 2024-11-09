import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import SliderComponent from './SliderComponent';

interface SurveyViewProps {
  titles: string[];
  questions: string[][];
  onFinish: (values: number[][]) => void;
}

const SurveyView2: React.FC<SurveyViewProps> = ({ titles, questions, onFinish }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [values, setValues] = useState<number[][]>(questions.map(() => Array(3).fill(3)));

  const handleSliderChange = (pageIndex: number, sliderIndex: number) => (value: number) => {
    const newValues = [...values];
    newValues[pageIndex][sliderIndex] = value;
    setValues(newValues);
  };

  const handleNext = () => {
    if (currentPage < titles.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      onFinish(values);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box className="flex flex-col items-center justify-between min-h-screen bg-white text-gray-800 px-4 py-8">
      <Box className="w-full text-center" sx={{ minHeight: '96px' }}> {/* Adjusted minHeight */}
        <Typography variant="h4" className="mb-8">{titles[currentPage]}</Typography>
      </Box>
      <Box className="flex flex-col items-center w-full space-y-6 flex-grow justify-center">
        {questions[currentPage].map((question, index) => (
          <SliderComponent
            key={index}
            question={question}
            onChange={handleSliderChange(currentPage, index)}
            initialValue={values[currentPage][index]}
          />
        ))}
      </Box>
      <Box className="w-full flex justify-between mt-8">
        {currentPage > 0 && (
          <Button
            onClick={handlePrevious}
            variant="contained"
            color="secondary"
            sx={{ width: '48%' }}
          >
            Previous
          </Button>
        )}
        <Button
          onClick={handleNext}
          variant="contained"
          color="primary"
          sx={{ width: currentPage > 0 ? '48%' : '100%' }}
        >
          {currentPage < titles.length - 1 ? 'Next' : 'Finish'}
        </Button>
      </Box>
    </Box>
  );
};

export default SurveyView2;