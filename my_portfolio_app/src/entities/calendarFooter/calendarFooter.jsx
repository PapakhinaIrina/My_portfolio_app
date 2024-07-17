/* eslint-disable react/prop-types */
import React from 'react';
import { Box } from '@mui/material';
import { Icon } from '@iconify/react';
import Lottie from 'lottie-react';
import Animation from '../../shared/ui/animation/animationEmptyList.json';
import { v4 as uuidv4 } from 'uuid';
import styles from './calendarFooter.module.scss';

export const CalendarFooter = (props) => {
  const { currentDayEvents } = props;
  const { v4 } = uuidv4();

  return (
    <Box className={styles['calendar-footer-wrapper']}>
      Events for today :
      <Box>
        {currentDayEvents.length > 0
          ? currentDayEvents.map((ev, index) => (
              <Box key={index}>
                <Box className={styles['calendar-footer-list-event-container']}>
                  <div>
                    <Icon icon='mdi:dot' width={28} />
                  </div>
                  <Box className={styles['calendar-footer-list-item-event']} key={index}>
                    {ev.title}
                  </Box>
                  <Box className={styles['calendar-footer-list-item-event']} key={index}>
                    {ev.description}
                  </Box>
                </Box>
              </Box>
            ))
          : null}
        {currentDayEvents.length === 0 && (
          <Box className={styles['calendar-footer-empty-list-item']} key={v4}>
            <Lottie animationData={Animation} loop={true} autoplay={true} style={{ height: '100px', width: '100px' }} />
            No events for today
          </Box>
        )}
      </Box>
    </Box>
  );
};
