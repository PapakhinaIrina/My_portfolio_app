import { Button } from '@mui/material';
import styles from './calendarButton.module.scss';
import { v4 as uuidv4 } from 'uuid';

export const CalendarButton = ({ title, sx, onClick  }) => {
  const  v4  = uuidv4();

  return (
    <Button
      id={v4}
      onClick={onClick}
      sx={sx}
      className={styles['calendar-button']}
    >
      {title}
    </Button>
  )
}