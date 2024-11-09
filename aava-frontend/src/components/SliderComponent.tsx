import React, { useState } from 'react';
import { Box, Typography, Slider } from '@mui/material';

interface SliderComponentProps {
  title: string;
  question: string;
  onChange: (value: number) => void;
  initialValue?: number;
}

const SliderComponent: React.FC<SliderComponentProps> = ({ title, question, onChange, initialValue = 3 }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: Event, newValue: number | number[]) => {
    const val = newValue as number;
    setValue(val);
    onChange(val);
  };

  return (
    <Box className="flex flex-col items-center justify-center w-full px-8">
      <Typography variant="h6" className="mb-4">{title}</Typography>
      <Typography variant="body1" className="mb-4">{question}</Typography>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
        sx={{ width: '100%' }}
      />
    </Box>
  );
};

export default SliderComponent;