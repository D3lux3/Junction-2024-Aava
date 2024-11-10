import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Box } from '@mui/material';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
// create mock input data
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);


// create RadarPlot component
const RadarPlot: React.FC<{ data1: number[], data2: number[] }> = ({ data1, data2 }) => {
  const colors = {
    you: 'rgba(54, 162, 235, 1)', // Blue
    company: 'rgba(255, 206, 86, 1)', // Yellow
    overlap: 'rgba(75, 192, 192, 1)', // Green
  };
  const data = {
    labels: ['Work-Life\nBalance', 'Diversity', 'Career', 'Flexibility', 'Health'],
    datasets: [
      {
        label: 'You',
        data: data1,
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light blue
        borderColor: colors.you,
        borderWidth: 2,
        pointBackgroundColor: colors.you,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: colors.you,
      },
      {
        label: 'Company',
        data: data2,
        backgroundColor: 'rgba(255, 206, 86, 0.2)', // Light yellow
        borderColor: colors.company,
        borderWidth: 2,
        pointBackgroundColor: colors.company,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: colors.company,
      },
      {
        label: 'Overlap',
        data: data1.map((value, index) => Math.min(value, data2[index])),
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light green
        borderColor: colors.overlap,
        borderWidth: 2,
        pointBackgroundColor: colors.overlap,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: colors.overlap,
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
    plugins: {
      legend: {
        display: true,
        position: 'bottom', // Position the legend inside the canvas
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
    },
  };

  return (
    <Box className="flex flex-col items-center justify-center w-full">
      <Radar data={data} options={options} />
    </Box>
  );
};

export default RadarPlot;