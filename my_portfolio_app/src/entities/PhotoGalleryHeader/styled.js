import { Box, Container } from "@mui/material";
import { styled } from "styled-components";

export const PhotoGalleryHeaderContainer = styled(Container) ({
  width: '100vh',
  position: 'relative',
  top: '5%',
})

export const PhotoGalleryHeaderBox = styled (Box) ({
  width: '500px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
})