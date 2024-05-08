import React, { useState, useCallback } from 'react';
import { Box, Button, Container, Input } from '@mui/material';
import { SearchLocation } from '../../shared/ui/SearchLocation';
import Img from '/Applications/MAMP/htdocs/My_portfolio_app/my_portfolio_app/src/shared/ui/Image/Weather/sunset.png';
import axios from 'axios';
import { getWeatherByCity } from '../../shared/api/Weaather';

const Weather = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState('');

  return (
    <Container
      sx={{
        minWidth: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        background: `url(${Img})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        color: 'white',
        opacity: 0.7,
      }}
    >
      <SearchLocation />

      <Box
        sx={{
          maxWidth: '700px',
          maxHeight: '700px',
          margin: 'auto',
          padding: '0 1rem',
          position: 'relative',
          top: '10%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: '100%',
            margin: '1rem auto',
          }}
        >
          <Box
            sx={{
              fontSize: '1.6rem',
            }}
          >
            <p>Location</p>
          </Box>

          <Box
            sx={{
              fontSize: '3rem',
            }}
          >
            <h1>Temp</h1>
          </Box>

          <Box
            sx={{
              position: 'relative',
              right: '-90%',
              transformOrigin: '0 0',
              transform: 'rotate(269deg)',
            }}
          >
            Description
          </Box>

          <Box>
            <Button onClick={() => getWeatherByCity('London')} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Weather;
