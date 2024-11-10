import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Divider, Button, BottomNavigation, BottomNavigationAction } from '@mui/material';
import RadarPlot from './RadarPlot';
import ValueMatch from './ValueMatch';
import MatchedBest from './MatchedBest';
import BiggestDifference from './BiggestDifference';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';
import { ConstructionOutlined } from '@mui/icons-material';


const CompanyCardView: React.FC = () => {
  const companies = [
    { id: 1, name: 'TYPESCRIPT LOVER', description: 'Helsinki • 25-50 Employees • Software Industry', info: 'This company is a software development company that focuses on creating innovative programs using TypeScript.' },
    { id: 2, name: 'Innovative Solutions Ltd', description: 'A company focused on providing innovative tech solutions.' },
    { id: 3, name: 'Green Energy Corp', description: 'A leading provider of renewable energy solutions.' },
    { id: 4, name: 'HealthTech Inc', description: 'Developing cutting-edge health technology products.' },
    // Add more companies as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState(0);
  const [companyDistances, setCompanyDistances] = useState([]);
  const [companyJobInfo, setCompanyJobInfo] = useState([]);
  const [userId, setUserId] = useState<string | null>(localStorage.getItem('applicantId'));
  const data1 = [5,4,4,2,1];
  const data2 = [1,1,1,4,4];

  useEffect(() => {
    if (userId) {
      const fetchCompanyDistances = async () => {
        try {
          const response = await fetch(`http://localhost:1337/applicants/companydistance/${userId}`);
          const data = await response.json();
          setCompanyDistances(data);
        } catch (error) {
          console.error('Error fetching company distances:', error);
        }
    }

    const fetchCompanyJobInfo = async () => {
      try {
        const response = await fetch(`http://localhost:1337/applicants/companyjobinfo/${userId}`);
        const data = await response.json();
        setCompanyJobInfo(data);
      } catch (error) {
        console.error('Error fetching company job info:', error);
      }
    };
    
    fetchCompanyDistances();
    fetchCompanyJobInfo();
  }
  }, [userId]);

  console.log(userId);
  console.log('Rendering CompanyCardView with companies:', companies);
  // lets print out the company distances and job info json objects
  console.log(companyDistances);
  console.log(companyJobInfo);

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
          height: 'auto', // Adjust the height as needed
        }}
      >
        <Card
          key={companies[currentIndex].id}
          sx={{
            minWidth: '80%', // Adjust the width as needed
            backgroundColor: 'white', // Set background color to white
            boxShadow: 'none', // Remove shadow
            padding: 2, // Add padding
            margin: 0, // Add margin
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
            <MatchedBest />
            <BiggestDifference />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 0 }}>
                <Button variant="contained" color="inherit" sx={{ mt: 1 }}>View Company</Button>
                <Button variant="outlined" color="inherit" sx={{ mt: 1 }}>Save Company</Button>
            </Box>
          </CardContent>
        </Card>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 2 }}></Box>
      </Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ width: '100%', position: 'fixed', bottom: 0 }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" icon={<FolderIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default CompanyCardView;