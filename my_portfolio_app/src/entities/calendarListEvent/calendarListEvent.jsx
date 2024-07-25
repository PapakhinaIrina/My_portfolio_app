/* eslint-disable react/prop-types */
import React from 'react';
import { isDayContainCurrentEvent } from '../../shared/utils/helpers/helpers';
import { v4 as uuidv4 } from 'uuid';
import { Button, List, ListItem } from '@mui/material';
import styles from './calendarEventListEvent.module.scss';

export const CalendarListEvent = (props) => {
  const { events, dayItem, openModalFormHandler } = props;
  const v4 = uuidv4();

  return (
    <>
      {events && events.length > 0 && (
        <List className={styles['list']} disablePadding component='nav' key={`listEvents-${v4}`}>
          {events
            .filter((ev) => isDayContainCurrentEvent(ev, dayItem))
            .map((ev, index) => (
              <Button
                className={styles['double-clicked-button']}
                fullWidth
                key={index}
                onDoubleClick={() => openModalFormHandler('Update', ev, dayItem)}
                sx={{
                  paddingTop: '0px',
                  paddingBottom: '0px',
                }}
              >
                <ListItem className={styles['list-item-title']} key={`listItem-${index}`}>
                  {ev.title}
                </ListItem>
              </Button>
            ))}
        </List>
      )}
    </>
  );
};
