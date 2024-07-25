import React, { useState, useEffect } from 'react';
import { Container, Button, Box } from '@mui/material';
import Calendar from './calendar';
import { CalendarButton } from '../../features/calendarButton/calendarButton';
import { FormModalEvent } from '../../widgets/modalEvents/modalEvents';
import { CalendarFooter } from '../../entities/calendarFooter/calendarFooter';
import { DayShowComponent } from '../../widgets/dayShowComponent/dayShowComponent';
import { Icon } from '@iconify/react';
import { DISPLAY_MODE_MONTH, DISPLAY_MODE_DAY } from '../../shared/constants/constants';
import { url } from '../../shared/constants/url';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import style from './calendar.module.scss';

const defaultEvent = {
  title: '',
  description: '',
  duration: 1,
  date: moment().format('X'),
};

const Planner = () => {
  const [today, setToday] = useState(moment());
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null);
  const [currentDayEvents, setCurrentDayEvents] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);
  const [method, setMethod] = useState(null);
  const [value, setValue] = useState(defaultEvent);
  const [displayMode, setDisplayMode] = useState('month');

  const v4 = uuidv4();

  const isStartCurrentDay = moment().startOf('day');
  const isEndCurrentDay = moment().endOf('day');

  const startDateQueryPlanner = isStartCurrentDay.clone().format('X');
  const endDateQueryPlanner = isEndCurrentDay.clone().format('X');

  useEffect(() => {
    fetch(`${url}/events?date_gte=${startDateQueryPlanner}&date_lte=${endDateQueryPlanner}`)
      .then((res) => res.json())
      .then((res) => {
        setCurrentDayEvents(res);
      })
      .catch((error) => console.error('Planner list page:', error));
  }, [events]);

  const prevHandler = () => setToday((prev) => prev.clone().subtract(1, displayMode));
  const todayHandler = () => setToday(moment());
  const nextHandler = () => setToday((prev) => prev.clone().add(1, displayMode));

  const selectedDay = moment().startOf('day').format('Do');
  const selectedMonthMonth = today.startOf('month').format('MMM');
  const selectedYearYear = moment().startOf('year').format('YYYY');

  const openFormHandler = (methodName, eventForUpdate, dayItem) => {
    const dateString = dayItem["_d"];
    const momentInstance = moment(dateString);
    const unixTimestamp = momentInstance.unix();

    console.log(dayItem);
    setEvent(eventForUpdate || { ...defaultEvent, date: unixTimestamp });
    setMethod(methodName);
    setValue({ ...value, title: eventForUpdate?.title, description: eventForUpdate?.description });
  };

  const openModalFormHandler = (methodName, eventForUpdate, dayItem) => {
    setIsShowForm(true);
    openFormHandler(methodName, eventForUpdate, dayItem);
  };

  const cancelFormHandler = () => {
    setIsShowForm(false);
    setEvent(null);
  };

  const changeEventHandler = (text, field) => {
    setEvent((prev) => ({
      ...prev,
      [field]: text,
    }));
  };

  const fetchHandler = (fetchUrl, eventForUpdate, httpMethod) => {
    fetch(fetchUrl, {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventForUpdate),
    })
      .then((res) => res.json())
      .then((res) => {
        if (httpMethod === 'PATCH') {
          setEvents((prev) => prev.map((eventEl) => (eventEl.id === res.id ? res : eventEl)));
        } else {
          setEvents((prev) => [...prev, res]);
        }
        cancelFormHandler();
      });
  };

  const eventFetchHandler = () => {
    const fetchUrl = method === 'Update' ? `${url}/events/${event.id}` : `${url}/events`;
    const httpMethod = method === 'Update' ? 'PATCH' : 'POST';
    fetchHandler(fetchUrl, event, httpMethod);
  };

  const deleteEventHandler = () => {
    const fetchUrl = `${url}/events/${event.id}`;
    const httpMethod = 'DELETE';

    fetch(fetchUrl, {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setEvents((prev) => prev.filter((eventEl) => eventEl.id !== event.id));
        cancelFormHandler();
      });
  };

  return (
    <Container className={style['planner-wrapper']}>
      <Container className={style['planner-container']}>
        <Box className={style['planner-header']}>
          {[selectedMonthMonth, ' ', selectedDay, ' ', selectedYearYear]}

          <Box className={style['planner-header-buttons-wrapper']}>
            <CalendarButton
              title='Month'
              onClick={() => setDisplayMode(DISPLAY_MODE_MONTH)}
              sx={{
                boxShadow: displayMode === DISPLAY_MODE_MONTH ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : 'none',
                color: displayMode === DISPLAY_MODE_MONTH ? 'white' : 'rgba(73, 79, 79)',
                backgroundColor: displayMode === DISPLAY_MODE_MONTH ? 'bdbdbd' : 'none',
              }}
            />
            <CalendarButton
              title='Day'
              onClick={() => setDisplayMode(DISPLAY_MODE_DAY)}
              sx={{
                boxShadow: displayMode === DISPLAY_MODE_DAY ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : 'none',
                color: displayMode === DISPLAY_MODE_DAY ? 'white' : 'rgba(73, 79, 79)',
                backgroundColor: displayMode === DISPLAY_MODE_DAY ? 'bdbdbd' : 'none',
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              fontSize: '20px',
              color: 'rgb(73, 79, 79)',
              cursor: 'pointer',
            }}
          >
            <Button id={v4} onClick={() => prevHandler(today)}>
              <Icon icon='ooui:next-rtl' width={15} color='rgba(73, 79, 79, 0.473)' />
            </Button>
            <Box onClick={() => todayHandler(today)}>Today</Box>
            <Button id={v4} onClick={() => nextHandler(today)}>
              <Icon icon='ooui:next-ltr' width={15} color='rgba(73, 79, 79, 0.473)' />
            </Button>
          </Box>
        </Box>

        <Box>
          {displayMode === DISPLAY_MODE_MONTH ? (
            <>
              <Calendar
                today={today}
                method={method}
                events={events}
                setEvents={setEvents}
                setIsShowForm={setIsShowForm}
                openModalFormHandler={openModalFormHandler}
                isShowForm={isShowForm}
                cancelFormHandler={cancelFormHandler}
                changeEventHandler={changeEventHandler}
                eventFetchHandler={eventFetchHandler}
                deleteEventHandler={deleteEventHandler}
                openFormHandler={openFormHandler}
              />
              <CalendarFooter currentDayEvents={currentDayEvents} />
            </>
          ) : null}

          {displayMode === DISPLAY_MODE_DAY ? (
            <DayShowComponent
              currentDayEvents={currentDayEvents}
              setCurrentDayEvents={setCurrentDayEvents}
              openFormHandler={openFormHandler}
              openModalFormHandler={openModalFormHandler}
              isShowForm={isShowForm}
              setIsShowForm={setIsShowForm}
              cancelFormHandler={cancelFormHandler}
              eventFetchHandler={eventFetchHandler}
              deleteEventHandler={deleteEventHandler}
              changeEventHandler={changeEventHandler}
              event={event}
              method={method}
              setValue={setValue}
              value={value}
              setEvent={setEvent}
              today={today}
            />
          ) : null}
        </Box>

        <FormModalEvent
          isShowForm={isShowForm}
          cancelFormHandler={cancelFormHandler}
          eventFetchHandler={eventFetchHandler}
          deleteEventHandler={deleteEventHandler}
          changeEventHandler={changeEventHandler}
          event={event}
          method={method}
          setValue={setValue}
          value={value}
          setEvent={setEvent}
        />
      </Container>
    </Container>
  );
};
export default Planner;
