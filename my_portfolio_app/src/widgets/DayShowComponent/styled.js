import { styled } from 'styled-components';
import { Box, Container, Button } from '@mui/material';
import { spacing } from '../../shared/constants/spacing';

export const DayShowComponentContainer = styled(Container)({
  maxWidth: '1010px',
  backgroundColor: '#fff',
  border: '2px solid #ccc',
  padding: '8px',
});

export const DayShowComponentWrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '50px 940px',
});

export const DayShowComponentScaleItem = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
});

export const DayShowComponentScaleItemText = styled(Box)({
  width: '100px',
  gap: '3px',
  border: 'solid 1px gray',
  borderRadius: '5px',
  boxShadow: '0 5px 30px 0 rgba(0,0,0,0.2)',
  cursor: 'pointer',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const DayShowComponentCellTimeWrapper = styled(Box)({
  marginLeft: '32px',
  gap: '1rem',
  position: 'relative',
  '&: not(:last-child)': {
    borderBottom: '1px solid #ccc',
  },
  width: '130px',
});

export const DayShowComponentBoxChosenEvent = styled(Box)({
  backgroundColor: '#fff',
  border: '2px solid #ccc',
  display: 'flex',
  flexDirection: 'column',
  padding: spacing[3],
});

export const DayShowComponentBoxItem = styled(Box)({
  alignItems: 'center',
  cursor: 'pointer',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontFamily: 'Segoe UI',
});

export const DayShowComponentBoxEmptyList = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontFamily: 'cursive',
});

export const DayShowComponentButtonCreateEvent = styled(Button)({
  height: '50px',
  width: '80px',
});
