/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import image from '../../shared/ui/image/signUp/image.svg';
import { headerHeight } from '../../shared/constants/componentSize';
import { spacing } from '../../shared/constants/spacing';

export const SignUpContainer = ({ children }) => {
  const { t } = useTranslation();

  return (
    <Container
      disableGutters
      sx={{
        height: `calc(100vh - ${headerHeight})`,
      }}
    >
      <Box
        sx={{
          paddingTop: spacing[3],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: `calc(${headerHeight}px + ${spacing[3]})`,
            left: '0',
            cursor: 'pointer',
          }}
        >
          <Link to='/portfolio'>
            <Icon icon='ic:outline-arrow-circle-left' width={46} color='#777777' />
          </Link>
        </Box>

        <Box
          sx={{
            width: '400px',
            padding: '20px 30px 32px',
            borderRadius: '8px',
            backgroundColor: '#f9f5f0',
            textAlign: 'center',
            transition: '0.4s',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          }}
        >
          <img src={image} alt='' style={{ width: '190px', padding: '5px' }} />
          <Typography
            variant='h2'
            component='h2'
            sx={{
              fontSize: '36px',
              fontWeight: '600',
              margin: '0 0  30px',
            }}
          >
            {t('create_account')}
          </Typography>
          {children}
        </Box>
      </Box>
    </Container>
  );
};
