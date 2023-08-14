import { styled } from 'styled-components'
import { Box } from '@mui/material'

export const CalendarFooterWrapper = styled(Box) ({
  fontFamily: "Segoe UI",  
  fontSize: "25px",
  maxHeight: "150px",
  maxWidth: "1010px",
  overflow: "scroll",
  textOverflow: "ellipsis"
})

export const CalendarFooterListEventContainer = styled(Box) ({
  display: "flex",
  flexDirection: "row",
  maxHeight: "50px",
  fontSize: "16px",
  fontWeight: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
})

export const CalendarFooterListItemEvent = styled(Box) ({
  alignItems: "center",
  justifyContent: "center",
  textTransform: "capitalize",
  fontWeight: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
  minWidth: "500px",
  paddingRight: "16px"
})

export const CalendarFooterEmptyListItem = styled ( Box) ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: "rgba(105, 112, 112, 0.409)",
})
