import { styled } from 'styled-components'
import { Button, List, ListItem } from '@mui/material'

export const StyledList = styled(List) ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  listStylePosition: "inside",
  margin: "unset",
  overflow: "scroll",
  maxHeight: "calc(100px - 33px)",
  width: "100%",
  // '&::-webkit-scrollbar': {}'
})

export const StyledDoubleClickedButton = styled(Button) ({
  border: "unset",
  backgroundColor: "unset",
  color: "unset",
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  fontSize: "8px",
  width: "139px",
})

export const StyledListItemTitle = styled(ListItem) ({
  fontSize: "8px",
  fontWeight: "bolder",
  fontFamily: "Segoe UI",  
  color: "37474f",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  textTransform: "capitalize",
})
