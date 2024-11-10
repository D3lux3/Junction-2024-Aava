import React from 'react';
import { Box, Typography } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const MatchedBest: React.FC = () => {
  return (
    <Box sx={{ padding: 1, borderRadius: 1, width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* Top left text */}
      <Typography variant="h6" color="textSecondary" sx={{ mb: 1 }}>
        Match the most
      </Typography>
      {/* Icon and text */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <WhatshotIcon sx={{ mr: 1 }} /> {/* Icon with margin-right */}
        <Typography variant="body1">
          Health
        </Typography>
      </Box>
    </Box>
  );
};

export default MatchedBest;