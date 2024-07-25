/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { FormModalEvent } from '../../widgets/modalEvents/modalEvents';
import { CalendarGridHeader } from '../../entities/calendarGridHeader/calendarGridHeader';
import { CalendarDayBox } from '../../shared/ui/calendarDayBox/calendarDayBox';
import { CalendarListEvent } from '../../entities/calendarListEvent/calendarListEvent';
import { isCurrentMonth, isCurrentDay } from '../../shared/utils/helpers/helpers';
import { url } from '../../shared/constants/url';
import { v4 as uuidv4 } from 'uuid';
import styles from './calendar.module.scss';

const totalDays = 42;

export default function Calendar(props) {
  const {
    today,
    method,
    events,
    setEvents,
    setIsShowForm,
    openModalFormHandler,
    isShowForm,
    cancelFormHandler,
    changeEventHandler,
    eventFetchHandler,
    deleteEventHandler,
    setValue,
    value,
  } = props;

  const v4 = uuidv4();

  const startDateQuery = today.clone().format('X');
  const endDateQuery = today.clone().add(totalDays, 'days').format('X');

  useEffect(() => {
    fetch(`${url}/events?date_gte=${startDateQuery}&date_lte=${endDateQuery}`)
      .then((res) => res.json())
      .then((res) => setEvents(res));
  }, [startDateQuery, endDateQuery]);

  const day = today.clone().startOf('week');
  const arrDays = [...new Array(totalDays)].map(() => {
      const newDay = day.add(1, 'day').clone();
      const dayObj = newDay.toObject();
      return { ...newDay, id: v4 };
    });

  return (
    <Container className={[styles['calendar-wrapper']]} key={v4}>
      <Container disableGutters className={styles['calendar-container']} key={v4}>
        <Box className={styles['calendar-box']} key={'calendar-container'}>
          <CalendarGridHeader />
          {arrDays.map((dayItem, index) => (
            <Box
              key={`calendar-box-${dayItem?.id}-${index}`}
              today={today}
              className={styles['calendar-month']}
              sx={{
                backgroundColor: isCurrentMonth(dayItem) ? 
                'hwb(0 100% 0%)': 'hwb(0 82% 16% / 0.231)'
                }}
                >
              <Box key={`calendar-day-${dayItem?.id}`} className={styles['calendar-day-header']}>
                <CalendarDayBox
                  openModalFormHandler={openModalFormHandler}
                  setIsShowForm={setIsShowForm}
                  isCurrentMonth={isCurrentMonth}
                  dayItem={dayItem}
                  today={today}
                />
              </Box>
              <CalendarListEvent
                events={events}
                dayItem={dayItem}
                openModalFormHandler={openModalFormHandler}
                setIsShowForm={setIsShowForm}
                isCurrentMonth={isCurrentMonth}
                isCurrentDay={isCurrentDay(dayItem)}
              />
            </Box>
          ))}
          <FormModalEvent
            isShowForm={isShowForm}
            cancelFormHandler={cancelFormHandler}
            eventFetchHandler={eventFetchHandler}
            deleteEventHandler={deleteEventHandler}
            changeEventHandler={changeEventHandler}
            method={method}
            setValue={setValue}
            value={value}
          />
        </Box>
      </Container>
    </Container>
  );
}
