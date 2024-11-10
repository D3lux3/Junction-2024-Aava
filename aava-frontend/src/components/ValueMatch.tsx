import React from 'react';
import { Box, Typography, Divider, CircularProgress, Grid2 } from '@mui/material';
import { AlignHorizontalLeft } from '@mui/icons-material';

interface FillableDotProps {
  color: string;
  fillPercentage: number; // Fill percentage from 0 to 100
}

const FillableDot: React.FC<FillableDotProps> = ({ color, fillPercentage }) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: 1, padding: 1 }}>
      <CircularProgress
        variant="determinate"
        value={fillPercentage}
        sx={{
          color: color,
          position: 'absolute',
        }}
        size={30}
        thickness={4}
      />
    </Box>
  );
};

const ValueMatch: React.FC = () => {
  const colors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF']; // Example colors for the balls
  const fillPercentages = [100, 75, 50, 25, 10]; // Example fill percentages

  return (
    <Box sx={{ padding: 0 }}>
      {/* First Row */}
      <Divider sx={{ width: '100%', mt: 1, borderColor: 'grey.800', borderWidth: 0.2 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.1 }}>
        <Box sx={{ flex: 2, whiteSpace: 'nowrap' }}>
          <Typography variant="body2" align="center">Company values</Typography>
        </Box>
        <Box sx={{ flex: 8, display: 'flex', justifyContent: 'flex-end', padding: 1 }}>
          {colors.map((color, index) => (
            <FillableDot key={index} color={color} fillPercentage={fillPercentages[index]} />
          ))}
        </Box>
        <Box sx={{ flex: 2, whiteSpace: 'nowrap' }}>
        </Box>
      </Box>

      {/* Second Row */}
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.1 }}>
        <Box sx={{ flex: 2, whiteSpace: 'nowrap' }}>
          <Typography variant="body2" align="center">Your values</Typography>
        </Box>
        <Box sx={{ flex: 8, display: 'flex', justifyContent: 'flex-end', padding: 1 }}>
          {colors.map((color, index) => (
            <FillableDot key={index} color={color} fillPercentage={fillPercentages[index]} />
          ))}
        </Box>
        <Box sx={{ flex: 2, whiteSpace: 'nowrap' }}>
        </Box>
      </Box>
      <Divider sx={{ width: '100%', mt: 0, borderColor: 'grey.800', borderWidth: 0.2 }} />
    </Box>
  );
};

export default ValueMatch;