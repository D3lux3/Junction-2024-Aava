import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';
import RadarPlot from './RadarPlot';
import ValueMatch from './ValueMatch';

const CompanyCardView: React.FC = () => {
  const companies = [
    { id: 1, name: 'TYPESCRIPT LOVER', description: 'Helsinki • 25-50 Employees • Software Industry', info: 'This company is a software development company that focuses on creating innovative programs using TypeScript.' },
    { id: 2, name: 'Innovative Solutions Ltd', description: 'A company focused on providing innovative tech solutions.' },
    { id: 3, name: 'Green Energy Corp', description: 'A leading provider of renewable energy solutions.' },
    { id: 4, name: 'HealthTech Inc', description: 'Developing cutting-edge health technology products.' },
    // Add more companies as needed
  ];

  const [currentIndex] = useState(0);

  const data1 = [5,4,4,2,1];
  const data2 = [1,1,1,4,4];


  console.log('Rendering CompanyCardView with companies:', companies);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflowY: 'auto',
        padding: 2,
        '@media (max-width: 600px)': {
          padding: 1,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: '80vh', // Adjust the height as needed
        }}
      >
        <Card
          key={companies[currentIndex].id}
          sx={{
            minWidth: '80%', // Adjust the width as needed
            backgroundColor: 'white', // Set background color to white
            boxShadow: 'none', // Remove shadow
            padding: 2, // Add padding
            margin: 1, // Add margin
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{companies[currentIndex].name}</Typography>
                <Typography variant="body2" color="textSecondary">{companies[currentIndex].description}</Typography>
              </Box>
            </Box>
            <Typography variant="body1">{companies[currentIndex].info}</Typography>
            <Divider sx={{ width: '100%', mt: 2, borderColor: 'grey.800', borderWidth: 0.2 }} />
            <RadarPlot data1={data1} data2={data2}/>
            <ValueMatch />
          </CardContent>
        </Card>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}></Box>
      </Box>
    </Box>
  );
};

export default CompanyCardView;