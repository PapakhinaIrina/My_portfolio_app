import React from "react"
import moment from "moment"
import { StyledCalendarWeek } from "./styled"


export const CalendarGridHeader = () => {
  return (
    <>
      {
        [...Array(7)].map((_, i) => (
          <StyledCalendarWeek key={i}> 
            { moment().day(i + 1).format('ddd') }
          </StyledCalendarWeek>
        ))
      }
    </>
  )
}
export default CalendarGridHeader;