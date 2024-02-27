import React from "react";
import { Box, Input } from "@mui/material";


export const SearchLocation = ({props}) => {
  return (
    <Box 
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3rem',
        width: '600px'
      }}
    >
      <Input
        type="text"
        fullWidth
        placeholder='Enter Location' 
        disableUnderline={true}
        sx={{
          padding: '.7rem 1.5rem',
          fontSize: '1.2rem',
          borderRadius: '25px',
          border: '1px solid rgba(255,255,255, 0.8)',
          background: 'rgba(255,255,255, 0.1)',
          color: '#f8f8f8',
        }}
      />
    </Box>
  )
}