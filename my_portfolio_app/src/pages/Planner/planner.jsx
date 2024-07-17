import React, { useState, useEffect } from 'react';
import  Calendar  from './calendar';
import { FormModalEvent } from '../../widgets/modalEvents/modalEvents';
import { CalendarFooter } from '../../entities/calendarFooter/calendarFooter';
import { DayShowComponent } from '../../widgets/dayShowComponent/dayShowComponent';
import { Container, Button, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import { spacing } from '../../shared/constants/spacing';
import { DISPLAY_MODE_MONTH, DISPLAY_MODE_DAY } from '../../shared/constants/constants';
import { url } from '../../shared/constants/url';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const defaultEvent = {
  title: '',
  description: '',
  duration: 1,
  date: moment().format('X'),
};

const Planner = () => {
  const { v4 } = uuidv4();
  const [today, setToday] = useState(moment());
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null);
  const [currentDayEvents, setCurrentDayEvents] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);
  const [method, setMethod] = useState(null);
  const [value, setValue] = useState(defaultEvent);
  const [displayMode, setDisplayMode] = useState('month');

  const isStartCurrentDay = moment().startOf('day');
  const isEndCurrentDay = moment().endOf('day');

  const startDateQueryPlanner = isStartCurrentDay.clone().format('X');
  const endDateQueryPlanner = isEndCurrentDay.clone().format('X');

  useEffect(() => {
    fetch(`${url}/events?date_gte=${startDateQueryPlanner}&date_lte=${endDateQueryPlanner}`)
      .then((res) => res.json())
      .then((res) => {
        setCurrentDayEvents(res);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(events)]);

  const prevHandler = () => setToday((prev) => prev.clone().subtract(1, displayMode));
  const todayHandler = () => setToday(moment());
  const nextHandler = () => setToday((prev) => prev.clone().add(1, displayMode));

  const selectedDay = moment().startOf('day').format('Do');
  const selectedMonthMonth = today.startOf('month').format('MMM');
  const selectedYearYear = moment().startOf('year').format('YYYY');

  const openFormHandler = (methodName, eventForUpdate, dayItem) => {
    setEvent(eventForUpdate || { ...defaultEvent, date: dayItem.format('X') });
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
        console.log(res);
        setEvents((prev) => prev.filter((eventEl) => eventEl.id !== event.id));
        cancelFormHandler();
      });
  };

  return (
    <Container
      sx={{
        paddingTop: spacing[4],
        maxWidth: '1060px',
        margin: '0 auto',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F5F5F5',
          borderRadius: '8px',
          border: '1px solid rgba(105, 112, 112, 0.409)',
          boxShadow: 'rgba(133, 134, 167, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
          paddingBottom: spacing[3],
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '30px',
              fontFamily: 'cursive',
            }}
          >
            {[selectedMonthMonth, ' ', selectedDay, ' ', selectedYearYear]}

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                fontSize: '20px',
              }}
            >
              <Button
                key={v4}
                onClick={() => setDisplayMode(DISPLAY_MODE_MONTH)}
                sx={{
                  boxShadow: displayMode === DISPLAY_MODE_MONTH ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : 'none',
                  color: displayMode === DISPLAY_MODE_MONTH ? 'white' : 'rgb(73, 79, 79)',
                  cursor: 'pointer',
                  backgroundColor: displayMode === DISPLAY_MODE_MONTH ? '#bdbdbd' : 'none',
                }}
              >
                Month
              </Button>
              <Button
                key={v4}
                onClick={() => setDisplayMode(DISPLAY_MODE_DAY)}
                sx={{
                  boxShadow: displayMode === DISPLAY_MODE_DAY ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : 'none',
                  color: displayMode === DISPLAY_MODE_DAY ? 'white' : 'rgb(73, 79, 79)',
                  cursor: 'pointer',
                  backgroundColor: displayMode === DISPLAY_MODE_DAY ? '#bdbdbd' : 'none',
                }}
              >
                Day
              </Button>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                fontSize: '20px',
                color: 'rgb(73, 79, 79)',
              }}
            >
              <Button key={v4} onClick={() => prevHandler(today)}>
                <Icon icon='ooui:next-rtl' width={15} color='rgba(73, 79, 79, 0.473)' />
              </Button>
              <Box onClick={() => todayHandler(today)}>Today</Box>
              <Button key={v4} onClick={() => nextHandler(today)}>
                <Icon icon='ooui:next-ltr' width={15} color='rgba(73, 79, 79, 0.473)' />
              </Button>
            </Box>
          </Box>

          <Box >
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
        </Box>
      </Container>
    </Container>
  );
};
export default Planner;
