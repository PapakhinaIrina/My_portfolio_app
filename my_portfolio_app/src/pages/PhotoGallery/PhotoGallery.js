import React from "react"
import { PhotogalleryContainer, PhotogalleryWrapper } from "./styled"
import { UploadPhotoInput } from "../../features/UploadPhotoInput"
import { PhotoGalleryHeader } from "../../entities/PhotoGalleryHeader"
import { PhotoGalleryGrid } from "../../entities/PhotoGalleryGrid"


const PhotoGallery = () => {
  return(
    <PhotogalleryContainer disableGutters
      sx={{
        display: 'grid',
        justifyContent: 'center',
        gridTemplateRows: '100px 60px 800px'
      }}>
      <PhotoGalleryHeader />
        <UploadPhotoInput />
      <PhotogalleryWrapper>
        <PhotoGalleryGrid>
          {/* <div>Here must to be photos
          </div> */}
        </PhotoGalleryGrid>
      </PhotogalleryWrapper>
    </PhotogalleryContainer>
  )
}
export default PhotoGallery