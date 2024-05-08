/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import { Box, TextField } from '@mui/material';

export const FormInput = (props) => {
  const { t } = useTranslation();

  return (
    <Box
      component='form'
      sx={{
        width: '100%',
      }}
    >
      <TextField
        value={props.value?.name}
        setValue={props.setValue?.name}
        onChange={props.onChange}
        name='name'
        autoComplete='given-name'
        required
        fullWidth
        id='name'
        label={t('first_name')}
        autoFocus
        helperText={props.helperText}
        error={props.error}
        sx={{
          color: 'black',
          outline: 'none',
          width: '100%',
          height: '56px',
          border: '0',
          background: 'RGB(255 255 255 / 30%)',
          borderRadius: '6px',
          margin: '8px 0',
          fontFamily: 'Dosis, sans-serif',
          textAlign: 'left',
          fontSize: '18px',
          transition: '0.4s',
        }}
      />
      <TextField
        value={props.value?.lastName}
        setValue={props.setValue?.lastName}
        onChange={props.onChange}
        name='lastName'
        autoComplete='given-name'
        required
        fullWidth
        id='lastName'
        label={t('last_name')}
        helperText={props.helperText}
        error={props.error}
        sx={{
          color: 'black',
          outline: 'none',
          width: '100%',
          height: '56px',
          border: '0',
          background: 'RGB(255 255 255 / 30%)',
          borderRadius: '6px',
          margin: '8px 0',
          fontFamily: 'Dosis, sans-serif',
          textAlign: 'left',
          fontSize: '18px',
          transition: '0.4s',
        }}
      />
      <TextField
        value={props.value?.email}
        setValue={props.setValue?.email}
        onChange={props.onChange}
        name='email'
        autoComplete='given-name'
        required
        fullWidth
        id='email'
        label={t('email')}
        helperText={props.helperText}
        error={props.error}
        sx={{
          color: 'black',
          outline: 'none',
          width: '100%',
          height: '56px',
          border: '0',
          background: 'RGB(255 255 255 / 30%)',
          borderRadius: '6px',
          margin: '8px 0',
          fontFamily: 'Dosis, sans-serif',
          textAlign: 'left',
          fontSize: '18px',
          transition: '0.4s',
        }}
      />
    </Box>
  );
};
