import React, { useRef, useState, useCallback, useEffect } from 'react';
import { PhotoGalleryButtons, PhotoGalleryButtonsContainer, PhotoGalleryButtonsWrapper, UploadInput } from './styled';
import { FormControl, InputLabel } from '@mui/material';

export const UploadPhotoInput = () => {
  const [files, setFiles] = useState(null);
  const filePicker = useRef(null);

  const handleChange = (event) => {
    setFiles(event?.target.files[0]);
  };

  const handleClick = () => {
    filePicker.current.click();
  };

  const handleUpload = useCallback(async () => {
    try {
      const data = new FormData();
      data.append('photos', files);

      await fetch('http://localhost:5006/single', {
        mode: 'no-cors',
        method: 'POST',
        body: data,
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => setFiles(res.data));
    } catch (error) {
      console.log(error);
    }
  }, [files]);

  useEffect(() => {
    fetch('http://localhost:5006/single').then((res) => console.log(res));
  }, [files]);

  return (
    <PhotoGalleryButtonsContainer
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: '5px',
      }}
    >
      <PhotoGalleryButtonsWrapper>
        <FormControl hiddenLabel={true}>
          <InputLabel htmlFor='file-input'></InputLabel>
          <UploadInput
            id='file-input'
            type='file'
            multiple={true}
            onChange={handleChange}
            name='photos'
            aria-label=''
            accept='image/*, .png, .jpg, .gif, .web'
            inputRef={filePicker}
          />
        </FormControl>
        <PhotoGalleryButtons onClick={handleClick}>choose a file</PhotoGalleryButtons>

        <PhotoGalleryButtons onClick={handleUpload}>upload photo</PhotoGalleryButtons>
        {files}
      </PhotoGalleryButtonsWrapper>
    </PhotoGalleryButtonsContainer>
  );
};

export default UploadPhotoInput;
