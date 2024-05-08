import React from 'react';
import { PhotogalleryContainer, PhotogalleryWrapper } from './styled';
import { UploadPhotoInput } from '../../features/UploadPhotoInput';
import { PhotoGalleryHeader } from '../../entities/PhotoGalleryHeader';
import { PhotoGalleryGrid } from '../../entities/PhotoGalleryGrid';

const PhotoGallery = () => {
  return (
    <PhotogalleryContainer
      disableGutters
      sx={{
        display: 'grid',
        justifyContent: 'center',
        gridTemplateRows: '100px 60px 800px',
      }}
    >
      <PhotoGalleryHeader />
      {/* <UploadPhotoInput />
      <PhotogalleryWrapper>
        <PhotoGalleryGrid>

        </PhotoGalleryGrid>
      </PhotogalleryWrapper> */}
      <div
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        В разработке...
      </div>
    </PhotogalleryContainer>
  );
};
export default PhotoGallery;
