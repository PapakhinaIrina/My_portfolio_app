import { Container } from '@mui/material';
import { styled } from 'styled-components';

export const PhotoGalleryGridContainer = styled(Container)({
  gridTemplateColumns: 'repeat(8, 70px)',
  gridTemplateRows: 'repeat(4, 160px)',
  gridGap: '10px',
  justifyContent: 'center',
  marginTop: '13px',
});
