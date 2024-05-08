/* eslint-disable react/prop-types */
import React from 'react';
import {
  CalendarFooterWrapper,
  CalendarFooterListEventContainer,
  CalendarFooterListItemEvent,
  CalendarFooterEmptyListItem,
} from './styled';
import { Box } from '@mui/material';
import { Icon } from '@iconify/react';
import Lottie from 'lottie-react';
import Animation from '../../shared/ui/animation/animationEmptyList.json';
import { v4 as uuidv4 } from 'uuid';

export const CalendarFooter = (props) => {
  const { currentDayEvents } = props;

  return (
    <CalendarFooterWrapper key={uuidv4()}>
      Events for today :
      <Box>
        {currentDayEvents.length > 0
          ? currentDayEvents.map((ev, index) => (
              <Box key={index}>
                <CalendarFooterListEventContainer>
                  <div>
                    <Icon icon='mdi:dot' width={28} />
                  </div>
                  <CalendarFooterListItemEvent key={index}>{ev.title}</CalendarFooterListItemEvent>
                  <CalendarFooterListItemEvent key={index}>{ev.description}</CalendarFooterListItemEvent>
                </CalendarFooterListEventContainer>
              </Box>
            ))
          : null}
        {currentDayEvents.length === 0 && (
          <CalendarFooterEmptyListItem key={uuidv4()}>
            <Lottie animationData={Animation} loop={true} autoplay={true} style={{ height: '100px', width: '100px' }} />
            No events for today
          </CalendarFooterEmptyListItem>
        )}
      </Box>
    </CalendarFooterWrapper>
  );
};
