import React from "react"
import { isDayContainCurrentEvent } from "../../shared/utils/helpers"
import { StyledList, 
          StyledDoubleClickedButton, 
          StyledListItemTitle, 
        } from "./styled"
        import { v4 as uuidv4 } from "uuid"


export const CalendarListEvent = (props) => {
  const { events, dayItem, openModalFormHandler } = props;

  return (
    <>
      {events && events.length > 0 && (
        <StyledList
          disablePadding
          component="nav" 
          key={uuidv4()}
          sx={{
            padding: "2px",
          }}>
            {
              events
                .filter(ev => isDayContainCurrentEvent(ev, dayItem))
                .map(ev => 
                  <StyledDoubleClickedButton
                    fullWidth
                    key={uuidv4()}
                    onDoubleClick={() => openModalFormHandler('Update', ev, dayItem)}
                    sx={{
                    paddingTop: "0px",
                    paddingBottom: '0px',
                    }}>
                    <StyledListItemTitle key={uuidv4()}
                      sx={{
                        padding: "0px",
                      }}>
                        {ev.title}
                    </StyledListItemTitle>
                  </StyledDoubleClickedButton>
                    )
            }
        </StyledList>
      )}
    </>
  )
}