import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Input, Box, Container, FormControl, InputLabel } from '@mui/material';
import styles from './uploadPhotoInput.module.css'

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
    <Container
      className={styles['photo-gallery-buttons-container']}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: '5px',
      }}
    >
      <Box className={styles['photo-gallery-buttons-wrapper']}>
        <FormControl hiddenLabel={true}>
          <InputLabel htmlFor='file-input' />
          <Input
            id='file-input'
            type='file'
            multiple={true}
            onChange={handleChange}
            name='photos'
            aria-label=''
            accept='image/*, .png, .jpg, .gif, .web'
            inputRef={filePicker}
            className={styles['upload-input']}
          />
        </FormControl>
        <Box onClick={handleClick} className={styles['photo-gallery-buttons']}>choose a file</Box>

        <Box onClick={handleUpload} className={styles['photo-gallery-buttons']}>upload photo</Box>
        {files}
      </Box>
    </Container>
  );
};

export default UploadPhotoInput;
