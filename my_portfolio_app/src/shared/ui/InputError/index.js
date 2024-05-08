import React from 'react';
import { Box } from '@mui/material';
import Lottie from 'lottie-react';
import AnimationError from '../../../shared/ui/animation/animationError.json';

export const InputError = (message) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0px',
      }}
    >
      {message}
      <Lottie animationData={AnimationError} loop={true} autoplay={true} style={{ height: '40px', width: '40px' }} />
    </Box>
  );
};
