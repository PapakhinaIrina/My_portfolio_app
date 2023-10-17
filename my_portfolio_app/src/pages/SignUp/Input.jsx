import { TextField, FormControl } from "@mui/material"
import { useFormContext } from "react-hook-form"
import { findInputError } from "./utils"
import { isFormInvalid } from "./utils"
import { InputError } from "../../shared/ui/InputError"



export const InputForm = ({  validation, type, id, label }) => {
  const { register, formState: { errors } } = useFormContext();

  const inputError = findInputError(errors, label)
  const isInvalid = isFormInvalid(inputError)

  return (
    <FormControl 
      sx={{
        width: "100%",
      }}>
        {isInvalid && (
          <InputError/>
          )}
      <TextField
        autoComplete="off"
        disableUnderline={true}
        label={label}
        id={id}
        fullWidth
        sx={{
          color: "black",
          outline: "none",
          width: "100%",
          height: "56px",
          border: "0",
          background: "RGB(255 255 255 / 30%)",
          borderRadius: "6px",
          margin: "8px 0",
          fontFamily: "'Dosis', sans-serif",
          textAlign: "left",
          fontSize: "18px",
          transition: "0.4s"
        }}
          type={type}
          {...register(label, validation)}
      />
    </FormControl>
  )
}