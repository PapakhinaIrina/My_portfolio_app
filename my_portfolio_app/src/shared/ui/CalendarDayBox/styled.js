import { styled } from 'styled-components'
import { Button, Box } from '@mui/material'


export const StyledDayHeaderPointer = styled(Box) ({
  display: "flex",
  cursor: "pointer",
  justifyContent: "flex-end",
  marginTop: "3px",
})

export const StyledCalendarDayButton = styled(Button) ({
  display: "flex",
  justifyContent: "flex-end",
})