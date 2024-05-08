/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

export const SignUpButton = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <Button
      type='submit'
      variant='contained'
      disableElevation
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        width: '100%',
        height: '56px',
        padding: '0 16px',
        backgroundColor: '#523815',
        color: '#f7f7f7',
        border: '0',
        fontFamily: 'Dosis, sans-serif',
        fontSize: '1rem',
        fontWeight: '600',
        textAlign: 'center',
        letterSpacing: '2px',
        transition: 'all 0.375s',
        marginTop: '18px',
      }}
    >
      {t('registration')}
    </Button>
  );
};
