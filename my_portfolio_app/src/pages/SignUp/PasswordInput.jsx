/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import { FormControl, InputLabel, InputAdornment, OutlinedInput, IconButton } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

export const PasswordInput = ({ setShowPassword, showPassword, onChange, value, setValue }) => {
  const { t } = useTranslation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl
      sx={{
        width: '100%',
        cursor: 'pointer',
      }}
      variant='outlined'
    >
      <InputLabel required htmlFor='outlined-adornment-password'>
        {t('password')}
      </InputLabel>

      <OutlinedInput
        id='outlined-adornment-password'
        type={showPassword ? 'text' : 'password'}
        label='password'
        value={value.password}
        name='password'
        onChange={onChange}
        setValue={setValue?.password}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} edge='end'>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
