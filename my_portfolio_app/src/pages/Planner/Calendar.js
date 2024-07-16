/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { FormModalEvent } from '../../widgets/ModalEvents/ModalEvents';
import { CalendarGridHeader } from '../../entities/CalendarGridHeader/CalendarGridHeader';
import { CalendarDayBox } from '../../shared/ui/CalendarDayBox/CalendarDayBox';
import { CalendarListEvent } from '../../entities/CalendarListEvent/CalendarListEvent';
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
  const arrDays = [...new Array(totalDays)].map(() =>{
    const newDay = day.add(1, 'day').clone();
    const id = uuidv4();
    return { ...newDay.toObject(), id };
  });

  return (
    <Container className={[styles['calendar-wrapper']]} key={v4}>
      <Container  className={styles['calendar-container']} key={v4}>
        <Box className={styles['calendar-box']} key={v4}>
          <CalendarGridHeader />
          {arrDays.map((dayItem, today) => (
            <Box
              key={dayItem.id}
              isWeekend={dayItem.day === 6 || dayItem.day === 0}
              isCurrentMonth={isCurrentMonth(dayItem, today)}
              today={today}
              className={styles['calendar-month']}
              sx={{
                margin: 0,
                padding: 0,
                backgroundColor: isCurrentMonth(dayItem, today) ? 'hwb(0 100% 0%)': 'hwb(0 82% 16% / 0.231)',
              }}
            >
              <Box key={dayItem.id + 1} className={styles['calendar-day-header']}>
                <CalendarDayBox
                  key={v4}
                  openModalFormHandler={openModalFormHandler}
                  setIsShowForm={setIsShowForm}
                  isCurrentMonth={isCurrentMonth}
                  dayItem={dayItem}
                  today={today}
                />
              </Box>
              <CalendarListEvent
                key={v4}
                events={events}
                dayItem={dayItem}
                openModalFormHandler={openModalFormHandler}
                setIsShowForm={setIsShowForm}
                isCurrentMonth={isCurrentMonth}
                isCurrentDay={isCurrentDay(dayItem, today)}
              />
            </Box>
          ))}
          <FormModalEvent
            key={v4}
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
