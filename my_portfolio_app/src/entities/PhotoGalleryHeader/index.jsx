import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import AnimationLineTitle from '../../shared/ui/animation/animationLineTitle.json';
import styles from './photoGalleryHeader.module.scss';

export const PhotoGalleryHeader = () => {
  return (
    <Container 
    className={styles['photo-gallery-header-container']}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box className={styles['photo-gallery-header-box']}>
        <Lottie
          animationData={AnimationLineTitle}
          loop={true}
          autoplay={true}
          style={{ height: '100px', width: '100px', transform: 'rotate(90deg)' }}
        />
        <Typography
          variant='h5'
          sx={{
            fontFamily: 'Times',
            color: '#616161',
          }}
        >
          Gallery Title
        </Typography>
        <Lottie
          animationData={AnimationLineTitle}
          loop={true}
          autoplay={true}
          style={{ height: '100px', width: '100px', transform: 'rotate(-90deg)' }}
        />
      </Box>
    </Container>
  );
};
