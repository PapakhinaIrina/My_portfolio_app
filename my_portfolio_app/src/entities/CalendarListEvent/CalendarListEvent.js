/* eslint-disable react/prop-types */
import React from 'react';
import { isDayContainCurrentEvent } from '../../shared/utils/helpers/helpers';
import { v4 as uuidv4 } from 'uuid';
import { Button, List, ListItem } from '@mui/material';
import styles from './calendarEventListEvent.module.css';

export const CalendarListEvent = (props) => {
  const { events, dayItem, openModalFormHandler } = props;
  const { v4 } = uuidv4();

  return (
    <>
      {events && events.length > 0 && (
        <List
          className={styles['list']}
          disablePadding
          component='nav'
          key={v4}
          sx={{
            padding: '2px',
          }}
        >
          {events
            .filter((ev) => isDayContainCurrentEvent(ev, dayItem))
            .map((ev) => (
              <Button
                className={styles['double-clicked-button']}
                fullWidth
                key={v4}
                onDoubleClick={() => openModalFormHandler('Update', ev, dayItem)}
                sx={{
                  paddingTop: '0px',
                  paddingBottom: '0px',
                }}
              >
                <ListItem
                  className={styles['list-item-title']}
                  key={v4}
                  sx={{
                    padding: '0px',
                  }}
                >
                  {ev.title}
                </ListItem>
              </Button>
            ))}
        </List>
      )}
    </>
  );
};
