import React from 'react';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import style from './photoGalleryGrid.module.scss';

export const PhotoGalleryGrid = () => {
  return (
    <Container
      disableGutters
      className={style['photo-gallery-grid-container']}
      sx={{
        display: 'grid',
      }}
    >
      <Box id='1' sx={{ backgroundColor: 'bcaaa4', gridArea: '1 / 1 / 1 / 5 ', width: '100%', height: '100%' }}>
        1
      </Box>
      <Box id='2' sx={{ backgroundColor: 'b0bec5', gridArea: '1 / 5 / 1 / 9', width: '100%', height: '100%' }}>
        2
      </Box>
      <Box id='3' sx={{ backgroundColor: '#d7ccc8', gridArea: '2 / 1 / 4 / 7 ', width: '100%', height: '100%' }}>
        3
      </Box>
      <Box id='4' sx={{ backgroundColor: '#90a4ae', gridArea: '2 / 7 / 2 / 9 ', width: '100%', height: '100%' }}>
        4
      </Box>
      <Box id='5' sx={{ backgroundColor: '#3e2723', gridArea: '3 / 7 / 3 / 9 ', width: '100%', height: '100%' }}>
        5
      </Box>
      <Box id='6' sx={{ backgroundColor: 'bdbdbd', gridArea: '4 / 1 / 4 / 5 ', width: '100%', height: '100%' }}>
        6
      </Box>
      <Box id='7' sx={{ backgroundColor: '#795548', gridArea: '4 / 5 / 4 / 9 ', width: '100%', height: '100%' }}>
        7
      </Box>
    </Container>
  );
};
