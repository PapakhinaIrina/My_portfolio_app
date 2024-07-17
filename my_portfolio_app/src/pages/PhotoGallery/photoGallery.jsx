import React from 'react';
import { Box, Container } from '@mui/material';
import { UploadPhotoInput } from '../../features/uploadPhotoInput';
import { PhotoGalleryHeader } from '../../entities/PhotoGalleryHeader';
import { PhotoGalleryGrid } from '../../entities/photoGalleryGrid';
import styles from './photoGallery.module.scss';

const PhotoGallery = () => {
  return (
    <Container
      disableGutters
      className={styles['photo-gallery-container']}
    >
      <PhotoGalleryHeader />
      {/* <UploadPhotoInput />
      <Box className={styles['photo-gallery-wrapper']}>
        <PhotoGalleryGrid>

        </PhotoGalleryGrid>
      </Box> */}
      <div
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        В разработке...
      </div>
    </Container>
  );
};
export default PhotoGallery;
