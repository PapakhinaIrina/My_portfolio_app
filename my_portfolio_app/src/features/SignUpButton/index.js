import React from "react"
import { Button } from "@mui/material"

export const SignUpButton = () => {
  return(
    <Button  
      variant="contained"
      type="submit"
      sx={{
        cursor: "pointer",
        width: "100%",
        height: "56px",
        padding: "0 16px",
        backgroundColor: "#523815",
        color: "#f7f7f7",
        border: "0",
        fontFamily: "'Dosis', sans-serif",
        fontSize: "1rem",
        fontWeight: "600",
        textAlign: "center",
        letterSpacing: "2px",
        transition: "all 0.375s",
      }}>
      Присоединяйся
    </Button>
  )
}