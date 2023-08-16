import { Box, Container } from "@mui/material";
import { styled } from "styled-components";
import { headerHeight } from "../../shared/constants";

export const PhotogalleryContainer = styled(Container) ({
  maxWidth: '100vh',
  height: `calc(100vh - ${headerHeight}px)`,
  justifyContent: 'center',

})

export const PhotogalleryWrapper = styled(Box) ({
  width: '700px',
  height: '700px',
  display: 'flex',
  flexDirection: 'column',
  border: '1.5px solid #616161',
  borderRadius: '5px'
})