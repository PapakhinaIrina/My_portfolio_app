import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, FormControl, MenuItem, Button } from '@mui/material';
import { Icon } from '@iconify/react';
import { languages } from '../../shared/constants';

export const LanguageButton = () => {
  const [isActive, setIsActive] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    setIsActive(false);
    console.log(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button onClick={() => setIsActive(true)}>
        <Icon icon='material-symbols:language' color='#777777' width={25} />
      </Button>

      {isActive && (
        <Select
          type='standard'
          open={isActive}
          onOpen={() => setIsActive(true)}
          onClose={() => setIsActive(false)}
          onChange={changeLanguage}
          defaultValue=''
          sx={{
            display: 'hidden',
            position: 'fixed',
            zIndex: '-10',
          }}
        >
          {languages &&
            languages.map(({ code, name, country_code }) => (
              <MenuItem key={country_code} value={code}>
                {name}
              </MenuItem>
            ))}
        </Select>
      )}
    </FormControl>
  );
};
