/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Box } from '@mui/material';
import { isCurrentDay } from '../../utils/helpers/helpers';
import moment from 'moment';
import styles from './dayHeaderPointer.module.scss';
import { v4 as uuidv4 } from 'uuid';

export const CalendarDayBox = (props) => {
  const { openModalFormHandler, dayItem, isCurrentMonth, today } = props;
  const v4 = uuidv4();

  return (
    <>
      <Box key={v4} className={styles['day-header-pointer']}>
        <Button
          key={v4}
          today={today}
          onDoubleClick={() => {
            openModalFormHandler('Create', null, dayItem);
          }}
          className={styles['calendar-day-button']}
          sx={{
            backgroundColor: isCurrentDay(dayItem) ? 'orange' : 'none',
            color: isCurrentMonth(dayItem) ? '#616161' : '#616161',
            borderRadius: '50%',
            minHeight: '40px',
            minWidth: '40px',
          }}
        >
          {moment(dayItem)?.format('D')}
        </Button>
      </Box>
    </>
  );
};
