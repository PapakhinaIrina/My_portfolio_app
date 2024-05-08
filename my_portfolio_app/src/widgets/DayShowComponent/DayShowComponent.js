/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  DayShowComponentContainer,
  DayShowComponentWrapper,
  DayShowComponentBoxItem,
  DayShowComponentBoxEmptyList,
  DayShowComponentBoxChosenEvent,
  DayShowComponentButtonCreateEvent,
  DayShowComponentScaleItem,
  DayShowComponentScaleItemText,
} from './styled';
import FormModalEvent from '../../widgets/ModalEvents/ModalEvents';
import { ITEMS_PER_DAY } from '../../shared/constants/constants';
import { Tooltip, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import Lottie from 'lottie-react';
import moment from 'moment';
import Animation from '../../shared/ui/animation/animationEmptyList.json';

export const DayShowComponent = (props) => {
  const {
    currentDayEvents,
    isShowForm,
    setIsShowForm,
    cancelFormHandler,
    eventFetchHandler,
    deleteEventHandler,
    changeEventHandler,
    method,
    setValue,
    openFormHandler,
    openModalFormHandler,
  } = props;

  const [chosenEvent, setChosenEvent] = useState([]);
  const currentDay = moment();

  const cells = [...new Array(ITEMS_PER_DAY)].map((_, index) => {
    const temp = [];
    for (const event of currentDayEvents) {
      if (+moment.unix(+event.date).format('H') === index) {
        temp.push(event);
      }
    }
    return temp;
  });

  const handleChosenEvent = (event) => {
    openFormHandler('Update', event);
    setChosenEvent(event);
    setIsShowForm(true);
  };

  return (
    <>
      <DayShowComponentContainer disableGutters>
        {currentDayEvents.length > 0 &&
          cells.map((eventsList, index) => {
            return (
              <DayShowComponentWrapper>
                {index && (
                  <Box sx={{ height: '60px' }} key={index}>
                    {`${index}`.padStart(2, '0')} : 00
                  </Box>
                )}

                <DayShowComponentScaleItem>
                  {eventsList.length > 0 &&
                    eventsList.map((event) => {
                      return (
                        <DayShowComponentScaleItemText onClick={() => handleChosenEvent(event)} key={index}>
                          <Box
                            sx={{
                              textTransform: 'capitalize',
                              textOverflow: 'ellipsis',
                              overflow: 'hidden',
                              whiteSpace: 'nowrap',
                              padding: '2px',
                            }}
                          >
                            <div>{event.title}</div>
                          </Box>
                          <Box
                            sx={{
                              textTransform: 'capitalize',
                              textOverflow: 'ellipsis',
                              overflow: 'hidden',
                              whiteSpace: 'nowrap',
                              padding: '2px',
                            }}
                          >
                            <div>{event.description}</div>
                          </Box>
                        </DayShowComponentScaleItemText>
                      );
                    })}
                </DayShowComponentScaleItem>
              </DayShowComponentWrapper>
            );
          })}

        {currentDayEvents.length === 0 ? (
          <DayShowComponentBoxItem
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <DayShowComponentBoxEmptyList>
              <Lottie
                animationData={Animation}
                loop={true}
                autoplay={true}
                style={{ height: '100px', width: '100px' }}
              />
              No events for today
            </DayShowComponentBoxEmptyList>
            <Tooltip title='Create event for today'>
              <DayShowComponentButtonCreateEvent
                onClick={() => {
                  openModalFormHandler('Create', null, currentDay);
                }}
                sx={{
                  fontSize: '8px',
                  color: 'rgb(73, 79, 79)',
                  fontFamiliy: 'sans-serif',
                }}
              >
                <Icon icon='zondicons:add-outline' width={44} color='#607d8b' />
              </DayShowComponentButtonCreateEvent>
            </Tooltip>
          </DayShowComponentBoxItem>
        ) : null}

        {chosenEvent.length > 0 ? (
          <DayShowComponentBoxChosenEvent key={chosenEvent.id}>
            <FormModalEvent
              isShowForm={isShowForm}
              cancelFormHandler={cancelFormHandler}
              eventFetchHandler={eventFetchHandler}
              deleteEventHandler={deleteEventHandler}
              changeEventHandler={changeEventHandler}
              method={method}
              setValue={setValue}
              value={chosenEvent.title}
              openModalFormHandler={openModalFormHandler}
            />
          </DayShowComponentBoxChosenEvent>
        ) : null}
      </DayShowComponentContainer>

      <Box
        onClick={() => openModalFormHandler('Create', null, currentDay)}
        sx={{
          paddingLeft: '970px',
          paddingTop: '16px',
          cursor: 'pointer',
        }}
      >
        <Tooltip title='Create event for today'>
          <Icon icon='zondicons:add-outline' width={34} color='#607d8b' />
        </Tooltip>
      </Box>
    </>
  );
};
