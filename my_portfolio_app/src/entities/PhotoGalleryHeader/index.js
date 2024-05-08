import React from 'react';
import { PhotoGalleryHeaderContainer, PhotoGalleryHeaderBox } from './styled';
import Lottie from 'lottie-react';
import AnimationLineTitle from '../../shared/ui/animation/animationLineTitle.json';
import { Typography } from '@mui/material';

export const PhotoGalleryHeader = () => {
  return (
    <PhotoGalleryHeaderContainer
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PhotoGalleryHeaderBox>
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
      </PhotoGalleryHeaderBox>
    </PhotoGalleryHeaderContainer>
  );
};
