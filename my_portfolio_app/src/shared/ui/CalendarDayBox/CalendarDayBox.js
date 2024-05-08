/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { StyledDayHeaderPointer, StyledCalendarDayButton } from './styled';

export const CalendarDayBox = (props) => {
  const { openModalFormHandler, dayItem, isCurrentMonth, isCurrentDay, today } = props;

  return (
    <>
      <StyledDayHeaderPointer>
        <StyledCalendarDayButton
          key={uuidv4()}
          today={today}
          isCurrentDay={isCurrentDay}
          onDoubleClick={() => {
            openModalFormHandler('Create', null, dayItem);
          }}
          sx={{
            borderRadius: '50%',
            backgroundColor: isCurrentDay(dayItem) ? 'orange' : 'none',
            minWidth: '33px',
            color: isCurrentMonth(dayItem) ? '#616161' : '#616161',
          }}
        >
          {moment(dayItem).format('D')}
        </StyledCalendarDayButton>
      </StyledDayHeaderPointer>
    </>
  );
};
