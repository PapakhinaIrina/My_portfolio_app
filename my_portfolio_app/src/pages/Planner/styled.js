import { styled } from 'styled-components';
import { Box, Container } from '@mui/material';
import { headerHeight } from '../../shared/constants';

export const StyledCalendarWrapper = styled(Container)({
  padding: '0',
});

export const StyledCalendarContainer = styled(Container)({
  height: `calc(100vh - ${headerHeight})`,
  border: '1px solid rgba(105, 112, 112, 0.409)',
});

export const StyledCalendarBox = styled(Box)({
  display: 'grid',
  backgroundColor: 'hwb(0 100% 0%)',
  border: '0.5px solid rgba(105, 112, 112, 0.409)',
  gridTemplateColumns: 'repeat(7, 0.4fr)',
  gridTemplateRows: 'repeat(6, 0.4fr)',
});

export const StyledCalendarMonth = styled(Box)(({ isCurrentMonth }) => {
  return {
    border: '0.5px solid rgba(105, 112, 112, 0.409)',
    maxWidth: '150px',
    minHeight: '100px',
    backgroundColor: isCurrentMonth ? 'hwb(0 100% 0%)' : 'hwb(0 82% 16% / 0.231)',
  };
});

export const CalendarDayHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  height: '33px',
});
