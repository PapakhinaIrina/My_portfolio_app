import React from 'react';
import { Box } from '@mui/material';
import moment from 'moment';
import styles from './calendarGridHeader.module.css';

export const CalendarGridHeader = () => {
  return (
    <>
      {[...new Array(7)].map((_, i) => (
        <Box className={styles['calendar-week']} key={i}>
          {moment()
            .day(i + 1)
            .format('ddd')}
        </Box>
      ))}
    </>
  );
};
export default CalendarGridHeader;
