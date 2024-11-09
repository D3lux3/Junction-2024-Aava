import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Box, Typography, Grid2 } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// create mock input data

// create RadarPlot component
const RadarPlot: React.FC<{ data1: number[], data2: number[] }> = ({ data1, data2 }) => {
  const data = {
    labels: ['Work-Life Balance', 'Mental Health Support', 'Flexible Working Conditions', 'Career Development', 'Diversity and Inclusion'],
    datasets: [
      {
        label: 'You',
        data: data1,
        backgroundColor: 'rgba(173, 216, 230, 0.2)', // Light blue
        borderColor: 'rgba(173, 216, 230, 1)',
        borderWidth: 1,
      },
      {
        label: 'Company',
        data: data2,
        backgroundColor: 'rgba(255, 255, 224, 0.2)', // Light yellow
        borderColor: 'rgba(255, 255, 224, 1)',
        borderWidth: 1,
      },
      {
        label: 'Overlap',
        data: data1.map((value, index) => Math.min(value, data2[index])),
        backgroundColor: 'rgba(255, 182, 193, 0.2)', // Light red
        borderColor: 'rgba(255, 182, 193, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
  };

  return (
    <Box className="flex flex-col items-center justify-center w-full">
      <Radar data={data} options={options} />
      <Grid2 container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Grid2 item>
          <FiberManualRecordIcon sx={{ color: 'rgba(173, 216, 230, 1)' }} />
          <Typography variant="body2">You</Typography>
        </Grid2>
        <Grid2 item>
          <FiberManualRecordIcon sx={{ color: 'rgba(255, 255, 224, 1)' }} />
          <Typography variant="body2">Company</Typography>
        </Grid2>
        <Grid2 item>
          <FiberManualRecordIcon sx={{ color: 'rgba(255, 182, 193, 1)' }} />
          <Typography variant="body2">Overlap</Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default RadarPlot;