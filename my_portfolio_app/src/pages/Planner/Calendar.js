/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { FormModalEvent } from '../../widgets/ModalEvents/ModalEvents';
import { CalendarGridHeader } from '../../entities/CalendarGridHeader/CalendarGridHeader';
import { CalendarDayBox } from '../../shared/ui/CalendarDayBox/CalendarDayBox';
import { CalendarListEvent } from '../../entities/CalendarListEvent/CalendarListEvent';
import {
  StyledCalendarContainer,
  StyledCalendarWrapper,
  StyledCalendarBox,
  StyledCalendarMonth,
  CalendarDayHeader,
} from './styled';
import { isCurrentMonth, isCurrentDay } from '../../shared/utils/helpers';
import { url } from '../../shared/constants/url';
import { v4 as uuidv4 } from 'uuid';

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

  const startDateQuery = today.clone().format('X');
  const endDateQuery = today.clone().add(totalDays, 'days').format('X');

  useEffect(() => {
    fetch(`${url}/events?date_gte=${startDateQuery}&date_lte=${endDateQuery}`)
      .then((res) => res.json())
      .then((res) => setEvents(res));
  }, [startDateQuery, endDateQuery]);

  const day = today.clone().startOf('week');
  const arrDays = [...new Array(totalDays)].map(() => day.add(1, 'day').clone());

  return (
    <StyledCalendarWrapper disableGutters>
      <StyledCalendarContainer disableGutters>
        <StyledCalendarBox>
          <CalendarGridHeader />
          {arrDays.map((dayItem, today) => (
            <StyledCalendarMonth
              disableGutters
              key={uuidv4()}
              isWeekend={dayItem.day === 6 || dayItem.day === 0}
              isCurrentMonth={isCurrentMonth(dayItem, today)}
              today={today}
            >
              <CalendarDayHeader>
                <CalendarDayBox
                  openModalFormHandler={openModalFormHandler}
                  setIsShowForm={setIsShowForm}
                  isCurrentMonth={isCurrentMonth}
                  isCurrentDay={isCurrentDay}
                  dayItem={dayItem}
                  today={today}
                />
              </CalendarDayHeader>
              <CalendarListEvent
                events={events}
                dayItem={dayItem}
                openModalFormHandler={openModalFormHandler}
                setIsShowForm={setIsShowForm}
                isCurrentMonth={isCurrentMonth}
                isCurrentDay={isCurrentDay(dayItem, today)}
              />
            </StyledCalendarMonth>
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
        </StyledCalendarBox>
      </StyledCalendarContainer>
    </StyledCalendarWrapper>
  );
}
