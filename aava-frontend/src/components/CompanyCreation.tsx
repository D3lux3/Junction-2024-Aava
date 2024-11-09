import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const finnishCities = [
  'Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu', 'Turku', 'Jyväskylä', 'Lahti', 'Kuopio', 'Kouvola'
];

const CompanyForm: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('example@company.com');
  const [bio, setBio] = useState('Not ready yet');
  const [industry, setIndustry] = useState('Technology');
  const [city, setCity] = useState('');
  const [size, setSize] = useState('');

  const [errors, setErrors] = useState({
    companyName: '',
    email: '',
    bio: '',
    industry: '',
    city: '',
    size: ''
  });

  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = { companyName: '', email: '', bio: '', industry: '', city: '', size: '' };
    tempErrors.companyName = companyName ? '' : 'This field is required';
    tempErrors.email = email ? '' : 'This field is required';
    tempErrors.bio = bio ? '' : 'This field is required';
    tempErrors.industry = industry ? '' : 'This field is required';
    tempErrors.city = city ? '' : 'This field is required';
    tempErrors.size = size ? '' : 'This field is required';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const getRandomFloat = () => (Math.random() * 4 + 1).toFixed(2);

  const wellbeingTitles = [
    'Work-Life Balance',
    'Mental Health Support',
    'Flexible Working Conditions and Workplace Culture',
    'Career and Skill Development',
    'Diversity and Inclusion'
  ];

  const populateWellbeingValues = async (companyId: string) => {
    const wellbeingValues = wellbeingTitles.map(title => ({
      name: title,
      weight: parseFloat(getRandomFloat()), // Convert to float
    }));
    try {
      for (const value of wellbeingValues) {
        const response = await fetch(`http://localhost:1337/companies/wellbeing/${companyId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(value),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error creating wellbeing value: ${response.statusText} - ${errorText}`);
        }

        console.log('Wellbeing value created successfully:', value);
      }
    } catch (error) {
      console.error('Error creating wellbeing values:', error);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      const companyData = { companyName, email, bio, industry, city, size };
      console.log('Company Data:', companyData);
      try {
        const response = await fetch('http://localhost:1337/companies', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(companyData),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error creating company: ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();
        console.log('Company created successfully:', data);
        populateWellbeingValues(data.id);

        // Navigate to the next page
        navigate('/demo-info');
      } catch (error) {
        console.error('Error creating company:', error);
      }
    }
  };

  return (
    <Box className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4 py-8">
      <Typography variant="h4" className="mb-8">Company Information</Typography>
      <Box component="form" onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md space-y-4" sx={{ mt: 4 }}>
        <TextField
          label="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          fullWidth
          error={!!errors.companyName}
          helperText={errors.companyName}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          fullWidth
          multiline
          rows={4}
          error={!!errors.bio}
          helperText={errors.bio}
        />
        <TextField
          label="Industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          fullWidth
          error={!!errors.industry}
          helperText={errors.industry}
        />
        <FormControl fullWidth error={!!errors.city}>
          <InputLabel>City</InputLabel>
          <Select
            value={city}
            onChange={(e) => setCity(e.target.value as string)}
          >
            {finnishCities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
          {errors.city && <Typography color="error">{errors.city}</Typography>}
        </FormControl>
        <FormControl fullWidth error={!!errors.size}>
          <InputLabel>Size</InputLabel>
          <Select
            value={size}
            onChange={(e) => setSize(e.target.value as string)}
          >
            <MenuItem value="50-100">50-100</MenuItem>
            <MenuItem value="100-500">100-500</MenuItem>
            <MenuItem value="500+">500+</MenuItem>
          </Select>
          {errors.size && <Typography color="error">{errors.size}</Typography>}
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CompanyForm;