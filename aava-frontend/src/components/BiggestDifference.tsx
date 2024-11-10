import React from 'react';
import { Box, Typography } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';

const BiggestDifference: React.FC = () => {
  return (
    <Box sx={{ padding: 2, borderRadius: 1, width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* Top left text */}
      <Typography variant="h6" color='textSecondary' sx={{ mb: 1 }}>
        Biggest difference
      </Typography>
      {/* Icon and text */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <AirIcon sx={{ mr: 1 }} /> {/* Icon with margin-right */}
        <Typography variant="body1">
          Health 2
        </Typography>
      </Box>
    </Box>
  );
};

export default BiggestDifference;