/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Container, Button, Tooltip } from '@mui/material';
import FormModalEvent from '../modalEvents/modalEvents';
import { ITEMS_PER_DAY } from '../../shared/constants/constants';
import { Icon } from '@iconify/react';
import Lottie from 'lottie-react';
import moment from 'moment';
import Animation from '../../shared/ui/animation/animationEmptyList.json';
import styles from './dayShowComponent.module.scss'

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
      <Container disableGutters className={styles['day-show-component-container']}>
        {currentDayEvents.length > 0 &&
          cells.map((eventsList, index) => {
            return (
              <Box className={styles['day-show-component-wrapper']}>
                {index && (
                  <Box sx={{ height: '60px' }} key={index}>
                    {`${index}`.padStart(2, '0')} : 00
                  </Box>
                )}

                <Box className={styles['day-show-component-scale-item']}>
                  {eventsList.length > 0 &&
                    eventsList.map((event) => {
                      return (
                        <Box onClick={() => handleChosenEvent(event)} key={index} className={styles['day-show-component-scale-item-text']}>
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
                        </Box>
                      );
                    })}
                </Box>
              </Box>
            );
          })}

        {currentDayEvents.length === 0 ? (
          <Box className={styles['day-show-component-box-item']}>
            <Box className={styles['day-show-component-box-empty-list']}>
              <Lottie
                animationData={Animation}
                loop={true}
                autoplay={true}
                style={{ height: '100px', width: '100px' }}
              />
              No events for today
            </Box>
            <Tooltip title='Create event for today'>
              <Button
                className={styles['day-show-component-button-create-event']}
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
              </Button>
            </Tooltip>
          </Box>
        ) : null}

        {chosenEvent.length > 0 ? (
          <Box key={chosenEvent.id} className={styles['day-show-component-box-choosen-even']}>
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
          </Box>
        ) : null}
      </Container>

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
