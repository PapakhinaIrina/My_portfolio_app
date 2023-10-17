import { FormControl, InputLabel, InputAdornment, OutlinedInput, IconButton  } from "@mui/material"
import { VisibilityOff, Visibility } from "@mui/icons-material"


export const PasswordInput = ({setShowPassword, showPassword}) => {
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl 
    sx={{ 
      width: "100%",
      marginTop: "10px"
      }} 
      variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
      </FormControl>
  )
}