/* eslint-disable quotes */
import React from 'react';
import { AppBar, Container, Box, Button, Toolbar, Typography } from '@mui/material';
import { useMatchMedia } from '../../shared/utils/hooks/matchMediaHook';
import { headerHeight } from '../../shared/constants/componentSize';
import { LanguageButton } from '../LanguageButton/index';
import { useTranslation } from 'react-i18next';

const textHeader = "Papakhina's Portfolio";
export const Header = () => {
  const { isDesktop } = useMatchMedia();
  const { t } = useTranslation();
  return (
    <AppBar
      position='static'
      color='transparent'
      sx={{
        height: isDesktop ? headerHeight : '40px',
        maxWidth: '100vw',
        minWidth: '100%',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: isDesktop ? '300px' : '180px',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {textHeader}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
            }}
          >
            <Button
              variant='text'
              href='/about'
              sx={{
                color: 'black',
                fontSize: isDesktop ? 20 : 8,
              }}
            >
              {t('about')}
            </Button>
            <Button
              variant='text'
              href='/contact'
              sx={{
                color: 'black',
                fontSize: isDesktop ? 20 : 8,
              }}
            >
              {t('contact')}
            </Button>
            <Button
              variant='text'
              href='/portfolio'
              sx={{
                color: 'black',
                fontSize: isDesktop ? 20 : 8,
              }}
            >
              {t('portfolio')}
            </Button>
            <Box
              sx={{
                position: 'relative',
                right: '0vh',
              }}
            >
              <LanguageButton />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
