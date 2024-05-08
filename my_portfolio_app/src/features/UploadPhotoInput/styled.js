import { Input, Box, Container } from '@mui/material';
import { styled } from 'styled-components';

export const PhotoGalleryButtonsContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
});

export const PhotoGalleryButtonsWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  height: '20px',
  gap: '6px',
});

export const UploadInput = styled(Input)({
  height: '0',
  opacity: '0',
  width: '0',
  lineHeight: '0',
  overflow: 'hidden',
  padding: '0',
  margin: '0',
});

export const PhotoGalleryButtons = styled(Box)({
  fontSize: '11px',
  color: 'gray',
  border: '1px solid #616161',
  borderRadius: '5px',
  padding: '2px',
  cursor: 'pointer',
});
